import Joi from 'joi';

const sendChatSchema = Joi.object({
    list_nomor: Joi.string().required().messages({
        'string.empty': 'list_nomor tidak boleh kosong.',
        'any.required': 'list_nomor wajib diisi.'
    }),
    chat: Joi.string().required().messages({
        'string.empty': 'chat tidak boleh kosong.',
        'any.required': 'chat wajib diisi.'
    }),
});

const checkNumberExistsSchema = Joi.object({
    nomor: Joi.string().required().messages({
        'string.empty': 'nomor tidak boleh kosong.',
        'any.required': 'nomor wajib diisi.'
    }),
});

const uploadFileSchema = Joi.object({
    file: Joi.object().required().messages({
        'object.base': 'File harus berupa objek.',
        'any.required': 'File wajib diisi.'
    }),
});

export { sendChatSchema, checkNumberExistsSchema, uploadFileSchema };