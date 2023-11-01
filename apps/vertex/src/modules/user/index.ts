import { Elysia, t } from 'elysia';
import { signUp } from './controller';

// t.RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, {
//   error(type, validator, value: any) {
//     return `${value.email} is not a valid email`;
//   },
// });

export const users = new Elysia({ prefix: '/user' }).post('/sign-up', signUp, {
  body: t.Object(
    {
      name: t.String({}),
      email: t.String({ error: 'Email is not valid' }),
      username: t.String(),
      password: t.String(),
      gender: t.Enum(
        { Male: 'Male', Female: 'Female' },
        {
          error(type, validator, value: any) {
            return `${value.gender} is not a valid gender. Must be either 'Male' or 'Female'`;
          },
        }
      ),
      dob: t.Optional(
        t.RegExp(/^\d{2}-\d{2}-\d{4}$/, {
          error(type, validator, value: any) {
            return `${value.dob} is not a valid date of birth. Must be in the format DD-MM-YYYY`;
          },
        })
      ),
    },
    {
      description:
        "Expects the following properties: 'name', 'email', 'username', 'password', 'gender', 'dob'",
    }
  ),
  detail: {
    summary: 'New User Registration',
    description: 'Signs up a new user',
    tags: ['Authentication'],
    responses: {
      201: {
        description: 'User created successfully',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: true },
                message: { type: 'string', example: 'User created successfully' },
                data: { type: 'object' },
              },
            },
          },
        },
      },
      500: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: { type: 'boolean', example: false },
                message: { type: 'string', example: 'Internal Server Error' },
              },
            },
          },
        },
      },
    },
  },
});
// .post('/sign-up', signUp)
// .post('/profile', getProfile);
