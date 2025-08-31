import * as WhatsappService from '../services/whatsapp-service.js';
import qrcode from 'qrcode';

const createQr = async (req, res) => {
    try {
        await WhatsappService.createSession(process.env.SESSION_NAME);
        res.status(200).json({ success: true, message: 'Session creation initiated. Please poll status for QR code.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const checkStatus = async (req, res) => {
    try {
        const currentStatus = WhatsappService.getStatus();
        if (currentStatus.qr) {
            const qrImage = await qrcode.toDataURL(currentStatus.qr);
            return res.status(200).json({ ...currentStatus, qr_image: qrImage });
        }
        res.status(200).json(currentStatus);
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const sendChat = async (req, res) => {
    try {
        const { list_nomor, chat } = req.body;
        const numbers = list_nomor.split(';');

        for (const number of numbers) {
            await WhatsappService.sendTextMessage(number.trim(), chat);
        }

        res.status(200).json({ success: true, message: 'Messages sent successfully.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const logoutDevice = (req, res) => {
    try {
        WhatsappService.deleteSession(process.env.SESSION_NAME);
        res.status(200).json({ success: true, message: 'Device logged out and session deleted.' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const checkNumberExists = async (req, res) => {
    try {
        const { nomor } = req.body;
        const exists = await WhatsappService.checkNumberExists(nomor);
        console.log(`Checking if number ${nomor} exists:`, exists);
        if (exists) {
            res.status(200).json({ success: true, message: 'Nomor terdaftar.' });
        } else {
            res.status(404).json({ success: false, message: 'Nomor tidak terdaftar.' });
        }
    } catch (error) {
        res.status(404).json({ success: false, message: 'Nomor tidak terdaftar.' });
    }
};

export { createQr, checkStatus, sendChat, logoutDevice, checkNumberExists };