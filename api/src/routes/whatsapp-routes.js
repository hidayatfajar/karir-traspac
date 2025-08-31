import { Router } from 'express';
import { createQr, checkStatus, sendChat, logoutDevice, checkNumberExists } from '../controllers/whatsapp-controller.js';
import validate from '../middlewares/validator-middleware.js';
import { checkNumberExistsSchema, sendChatSchema } from '../validators/whatsapp-validator.js';

const router = Router();

router.post('/create-qr', createQr);
router.get('/status', checkStatus);
router.post('/send-chat', validate(sendChatSchema), sendChat);
router.post('/logout', logoutDevice);
router.post('/check-number', validate(checkNumberExistsSchema), checkNumberExists);

export default router;