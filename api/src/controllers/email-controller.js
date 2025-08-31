import emailService from "../services/email-service.js";

/**
 * Menangani permintaan untuk mengirim email promosi.
 */
export const sendPromotionalEmail = async (req, res) => {
    try {
        const { recipients, subject, dynamicData } = req.body;

        // Validasi input sederhana
        if (!recipients || !Array.isArray(recipients) || recipients.length === 0) {
            return res.status(400).json({ message: 'Input "recipients" (array) wajib diisi.' });
        }
        if (!subject || !dynamicData) {
            return res.status(400).json({ message: 'Input "subject" dan "dynamicData" wajib diisi.' });
        }

        // Panggil service untuk mengirim email
        const result = await emailService.sendBulkEmail(recipients, subject, dynamicData);

        res.status(200).json({
            status: 'success',
            message: 'Email telah berhasil dimasukkan ke dalam antrian pengiriman.',
            data: result,
        });
    } catch (error) {
        console.error('Error di EmailController:', error.message);
        res.status(500).json({
            status: 'error',
            message: error.message || 'Terjadi kesalahan pada server.',
        });
    }
};