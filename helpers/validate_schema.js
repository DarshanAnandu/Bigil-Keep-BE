const joi = require('@hapi/joi');

const authSchema = joi.object({
    email: joi.string().email().lowercase().required(),
    password: joi.string().password().min(7).max(14)
});

module.exports = {
    authSchema,
}