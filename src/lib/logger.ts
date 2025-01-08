import { pinoLogger } from "hono-pino";

export const logger = pinoLogger();
http:{
    reqId:()=>crypto.randomUUID
}
   