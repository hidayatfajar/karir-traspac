import { Router } from 'express';
import { handleFileUpload } from '../controllers/storage-controller.js';
import { uploadMiddleware } from '../middlewares/upload-middleware.js';

const router = Router();

// Definisikan endpoint POST /upload
// 1. `uploadMiddleware.single('file')` akan menangani file upload terlebih dahulu.
// 2. `handleFileUpload` akan dieksekusi setelahnya.
router.post('/upload', uploadMiddleware.single('file'), handleFileUpload);

export default router;