import {OpenAPIHono} from '@hono/zod-openapi'
import { pinoLogger } from 'hono-pino'
import { notFound, onError } from 'stoker/middlewares'

const app = new OpenAPIHono()

app.use(pinoLogger({
  http:{
    reqId:()=>crypto.randomUUID(),
  }
}))
app.notFound(notFound)
app.onError(onError)

app.get('/', (c) => {
  c.var.logger.warn('This is a warning')
  return c.text('Hello Hono!')
})

app.get('/error', (c) => {
  throw new Error('This is an error')
})

export default app
