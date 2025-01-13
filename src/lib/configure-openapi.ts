import { OpenAPIHono } from "@hono/zod-openapi";
import packageJson from '../../package.json';
import { apiReference } from "@scalar/hono-api-reference";

export default function configureOpenAPI(app: OpenAPIHono  ) {
    app.doc('/doc', {
        openapi: '3.0.0',
        info: {
            title: 'Wakati API',
            description: 'Text Intelligence platform',
            version: packageJson.version,
        },
    })
    app.get('/reference',
        apiReference({
            theme:'elysiajs',
            spec:{
                url:'/doc'  
            },
})
    )
}