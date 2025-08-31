import multer from 'multer';

// Middleware error handler harus memiliki 4 argumen (err, req, res, next)
export const errorHandlerMiddleware = (err, req, res, next) => {
  console.log('request:', req.body);
  // Cek apakah error berasal dari Multer
  if (err instanceof multer.MulterError) {
    // Jika ya, kirim response JSON kustom dengan pesan error dinamis dari multer
    return res.status(400).json({
      message: `File upload error: ${err.message}`, // Mengambil pesan error dinamis
      data: null
    });
  }

  // Jika error jenis lain, kirim response server error generik
  console.error('An unexpected error occurred:', err);
  return res.status(500).json({
    message: 'An internal server error occurred.',
    data: null
  });
};