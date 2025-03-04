import { createRouter } from '@/lib/create-app';

import * as handlers from './analyze.handlers';
import * as routes from './analyze.routes';

const router = createRouter().openapi(routes.analyse, handlers.analyze);

export default router