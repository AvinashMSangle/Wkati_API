import { createRouter } from '@/lib/create-app'
import { createRoute, z } from '@hono/zod-openapi'

const router = createRouter().openapi(createRoute({
  method: 'get',
  path: '/',
  responses: {
    200: {
      content: {
        'description/json': {
          schema: z.object({
            message: z.string(),
          }),
        },
      },
      description: 'Hello from Wkati API',
    },
  },
}), (c) => {
  return c.json({
    message: 'Hello World',
  })
})

export default router
