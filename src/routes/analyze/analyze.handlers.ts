import { RouteHandler } from "@hono/zod-openapi";
import { Context } from "hono";
import { AnalyzerRoute } from "./analyze.routes";

export const analyze:RouteHandler<AnalyzerRoute> = async(c:Context) => {

    const body = await c.req.json()

    return c.json({
        message: body.text
    })
}

function parse(text: string) {
    return text.toUpperCase
}