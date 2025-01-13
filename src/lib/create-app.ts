import { OpenAPIHono } from '@hono/zod-openapi'
import { notFound, onError} from 'stoker/middlewares'
import { logger } from '../../middlewares/logger'
export  function createRouter() {

return new OpenAPIHono({
    strict:false
})
}
export function createApp() {   
const app= createRouter()
app.notFound(notFound)

app.onError(onError)
app.use(logger)
return app
}