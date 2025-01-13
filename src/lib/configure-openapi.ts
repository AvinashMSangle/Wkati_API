import type { OpenAPIHono } from '@hono/zod-openapi'
import { apiReference } from '@scalar/hono-api-reference'
import packageJson from '../../package.json'

export default function configureOpenAPI(app: OpenAPIHono) {
  app.doc('/doc', {
    openapi: '3.0.0',
    info: {
      title: 'Wakati API',
      description: 'Text Intelligence platform',
      version: packageJson.version,
    },
  })
  app.get('/reference', apiReference({
    theme: 'elysiajs',
    spec: {
      url: '/doc',
    },
  }))
}
