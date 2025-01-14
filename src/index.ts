import configureOpenAPI from '@/lib/configure-openapi'
import { createApp } from '@/lib/create-app'
import index from '@/routes/index.routes'
import analyze from '@/routes/analyze/analyze.index'

const app = createApp()
configureOpenAPI(app)

const routes = [index,analyze]
routes.forEach(route => app.route('/', route))

export default app
