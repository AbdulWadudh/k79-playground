import { Elysia } from 'elysia';
import { swagger } from '@elysiajs/swagger';
import { cors } from '@elysiajs/cors';
import { logger } from '@bogeychan/elysia-logger';
import { processEnvs, VERTEX_SECRETS } from 'custom-config-data';

import { users } from './modules';

processEnvs('VERTEX');

const vertex = new Elysia()
  .use(cors())
  .use(
    logger({
      customProps(ctx) {
        return {
          params: ctx.params,
          query: ctx.params,
          body: ctx.body,
        };
      },
    })
  )
  .use(
    swagger({
      path: '/docs/api',
      documentation: {
        info: {
          title: "Vertex's API",
          version: '1.0.0',
          description: 'API Documentation for Vertex',
          contact: {
            name: 'Abdul Wadudh',
            email: 'abdulwadudh5@gmail.com',
            url: 'https://github.com/AbdulWadudh',
          },
        },
      },
    })
  )
  .get('/', () => ({ success: true, message: 'Welcome to the Vertex API', VERTEX_SECRETS }))
  .use(users)
  .listen(4000);

console.log(`🦊 Elysia is running at http://${vertex.server?.hostname}:${vertex.server?.port}`);

export type Vertex = typeof vertex;
