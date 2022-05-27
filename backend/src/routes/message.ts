import { Router } from 'express';
import { checkSchema } from 'express-validator';

import { postMessage } from '../controllers/message';
import { postMessageSchema } from '../schemas/message';

export const router = Router();

router.post('/message', checkSchema(postMessageSchema), postMessage);
