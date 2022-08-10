const Joi = require('joi');

const validateAuth = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
};

module.exports = validateAuth;
