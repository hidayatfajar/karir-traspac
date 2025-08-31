import joi from "joi";

const validateSendEmail = joi.object({
  recipients: joi.array().items(joi.string().email()).min(1).required(),
  subject: joi.string().min(1).required(),
  dynamicData: joi.object({
    namaUser: joi.string().required(),
    kontenDinamis: joi.string().required(),
    linkTombol: joi.string().uri().required(),
  }).required(),
});

export { validateSendEmail };
