import { createRoute, z } from '@hono/zod-openapi'
import * as HttpStatusCodes from 'stoker/http-status-codes'

export const analyse = createRoute({
  method: 'post',
  path: '/analyze',
  request: {
    body: {
     
      content: {
        'application/json': {
          schema: z.object({
            text: z.string(),
          })
        }
      }
    }
  },
   
  responses: {
    [HttpStatusCodes.OK]: {
      content: {
        'description/json': {
          schema: z.object({
          }),
        },
      },
      description: 'Hello from Wkati API',
    },
  },
})  

export type AnalyzerRoute = typeof analyse