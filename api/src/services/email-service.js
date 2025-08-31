import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import config from '../config/email-config.js';

// Helper untuk mendapatkan __dirname di ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

class EmailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: config.smtp.host,
            port: config.smtp.port,
            secure: config.smtp.secure,
            auth: config.smtp.auth,
        });

        // Path ke template, relatif dari root proyek
        const templatePath = path.join(process.cwd(), '/src/public/templates/template-email.html');
        this.htmlTemplate = fs.readFileSync(templatePath, 'utf8');
    }

    /**
     * Mengganti placeholder di template dengan data yang diberikan.
     * @param {object} dynamicData - Objek berisi data untuk personalisasi.
     * @returns {string} - Konten HTML yang sudah dipersonalisasi.
     */
    _personalizeTemplate(dynamicData) {
        let personalizedHtml = this.htmlTemplate;
        for (const key in dynamicData) {
            const regex = new RegExp(`{{${key}}}`, 'g');
            personalizedHtml = personalizedHtml.replace(regex, dynamicData[key]);
        }
        // Fallback untuk placeholder yang mungkin tidak tergantikan
        personalizedHtml = personalizedHtml.replace(/{{.*?}}/g, ''); 
        return personalizedHtml;
    }

    /**
     * Mengirim email ke beberapa penerima.
     * @param {string[]} recipients - Array alamat email penerima.
     * @param {string} subject - Subjek email.
     * @param {object} dynamicData - Data untuk personalisasi template.
     */
    async sendBulkEmail(recipients, subject, dynamicData) {
        const personalizedHtml = this._personalizeTemplate(dynamicData);

        const mailOptions = {
            from: `"${config.email.fromName}" <${config.email.fromAddress}>`,
            to: recipients.join(', '), // Nodemailer menangani array atau string koma
            subject: subject,
            html: personalizedHtml,
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log(`Email berhasil dikirim ke: ${recipients.join(', ')}. Message ID: ${info.messageId}`);
            return info.messageId;
        } catch (error) {
            console.error(`Gagal mengirim email:`, error);
            // Lemparkan error agar bisa ditangani oleh controller
            throw new Error('Proses pengiriman email gagal.');
        }
    }
}

// Ekspor sebagai singleton, sehingga hanya ada satu instance EmailService di seluruh aplikasi
export default new EmailService();