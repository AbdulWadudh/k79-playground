import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const NODE_ENV = process.env.NODE_ENV ?? 'development';

export const database =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });

if (NODE_ENV !== 'production') globalForPrisma.prisma = database;

export default database;
