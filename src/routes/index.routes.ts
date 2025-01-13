import { createRoute, z } from '@hono/zod-openapi';
import { createRouter} from '@/lib/create-app';

const router = createRouter().openapi(createRoute({
    method:'get',
    path:'/',
    responses:{
        200:{
              content:{
                'description/json':{
                    schema: z.object({
                        message: z.string()
                    }),
                },
            },
            description:'Hello from Wkati API',
        },
    },
}),(c) => {

return c.json({
    message:'Hello World'
})
})

export default router