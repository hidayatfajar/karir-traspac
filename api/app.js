import express from "express";
import dotenv from "dotenv";
import whatsappRoutes from "./src/routes/whatsapp-routes.js";
import emailRoutes from "./src/routes/email-routes.js";
import storageRoutes from "./src/routes/storage-routes.js";
import { errorHandlerMiddleware } from "./src/middlewares/error-handler-middleware.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("WhatsApp Bot Server is running! 🚀");
});

app.use("/whatsapp", whatsappRoutes);
app.use("/email", emailRoutes);
app.use("/storage", storageRoutes);
app.use(errorHandlerMiddleware);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
