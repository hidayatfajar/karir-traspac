import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  smtp: {
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  },
  email: {
    fromName: process.env.EMAIL_FROM_NAME,
    fromAddress: process.env.EMAIL_FROM_ADDRESS,
  },
};

export default config;
