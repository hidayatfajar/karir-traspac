import multer from 'multer';

// Konfigurasi Multer untuk menangani file di memori.
// Ini mencegah file sementara ditulis ke disk server.
const storage = multer.memoryStorage();

// Ekspor middleware upload
export const uploadMiddleware = multer({ storage: storage });