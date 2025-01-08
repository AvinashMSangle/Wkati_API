import {OpenAPIHono} from '@hono/zod-openapi'
import { logger } from './lib/logger'
import { notFound, onError, serveEmojiFavicon } from 'stoker/middlewares'

const app = new OpenAPIHono()

app.use(logger)
app.notFound(notFound)
app.onError(onError)
app.use(serveEmojiFavicon("😀"))

app.get('/', (c) => {
    return c.text('Hello Hono!')
})

app.get('/error', (c) => {
  throw new Error('This is an error')
})

export default app
