const Joi = require('joi');

const validateBody = (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    displayName: Joi.string().min(8).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    image: Joi.string().required(),
  });

  const { error } = schema.validate(body);

  if (error) return res.status(404).json({ message: error.message });

  next();
};

module.exports = validateBody;
