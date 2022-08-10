const Joi = require('joi');

const validateBody = (data) => {
  const schema = Joi.object({
    displayName: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    image: Joi.string().required(),
  });

  const { error, value } = schema.validate(data);

  if (error) throw error;

  return value;
};

module.exports = validateBody;
