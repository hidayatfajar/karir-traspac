import { supabase } from "../config/supabase-config.js";

const BUCKET_PUBLIC_NAME = process.env.BUCKET_PUBLIC_NAME;
const BUCKET_PRIVATE_NAME = process.env.BUCKET_PRIVATE_NAME;

/**
 * Mengunggah file ke Supabase Storage.
 * @param {object} file - Objek file dari multer (req.file).
 * @param {boolean} isPublic - Menentukan apakah akan diunggah ke bucket publik atau privat.
 * @returns {Promise<string>} URL publik (jika publik) atau Signed URL (jika privat).
 */
export const uploadFileToStorage = async (file, isPublic = true) => {
  const fileName = `${Date.now()}-${file.originalname}`;
  const bucketName = isPublic ? BUCKET_PUBLIC_NAME : BUCKET_PRIVATE_NAME;

  // 1. Upload file ke bucket yang sesuai
  const { error: uploadError } = await supabase.storage
    .from(bucketName)
    .upload(fileName, file.buffer, {
      contentType: file.mimetype,
    });

  if (uploadError) {
    throw new Error(`Supabase upload error: ${uploadError.message}`);
  }

  // 2. Buat URL berdasarkan tipe bucket
  if (isPublic) {
    // --- Untuk Bucket Publik ---
    const { data } = supabase.storage
      .from(bucketName)
      .getPublicUrl(fileName);
    return data.publicUrl;
  } else {
    // --- Untuk Bucket Privat ---
    // Buat Signed URL yang valid selama 1 jam (3600 detik)
    const { data, error: signedUrlError } = await supabase.storage
      .from(bucketName)
      .createSignedUrl(fileName, 3600);

    if (signedUrlError) {
      throw new Error(`Supabase signed URL error: ${signedUrlError.message}`);
    }
    return data.signedUrl;
  }
};