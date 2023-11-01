import database from 'database';
import { Context } from 'elysia';

export const signUp = async ({ body, set }: any) => {
  const insertIntoDb = await database.user.upsert({
    where: { email: body?.email ?? '' },
    create: body as any,
    update: body as any,
  });

  set.status = 201;

  return { success: true, message: 'User created successfully', data: insertIntoDb };
};
