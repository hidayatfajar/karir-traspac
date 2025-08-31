import { uploadFileToStorage } from '../services/storage-service.js';

export const handleFileUpload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'Tidak ada file yang diunggah.' });
    }

    // Panggil service untuk melakukan upload
    const publicUrl = await uploadFileToStorage(req.file, false); // false untuk bucket private

    // Kirim response sukses ke klien
    res.status(200).json({
      message: 'File berhasil diunggah!',
      url: publicUrl,
    });
  } catch (error) {
    console.error('Error in handleFileUpload:', error);
    res.status(500).json({ error: 'Terjadi kesalahan pada server saat mengunggah file.' });
  }
};