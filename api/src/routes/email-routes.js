import { Router } from 'express';
import {validateSendEmail} from '../validators/email-validator.js';
import { sendPromotionalEmail } from '../controllers/email-controller.js';
import validate from './../middlewares/validator-middleware.js';

const router = Router();

router.post('/send', validate(validateSendEmail), sendPromotionalEmail);

export default router;