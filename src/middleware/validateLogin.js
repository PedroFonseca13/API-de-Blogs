const Joi = require('joi');

const validateLogin = (req, res, next) => {
  const { body } = req;

  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = schema.validate(body);

  if (error) return res.status(400).json({ message: 'Some required fields are missing' });

  next();
};

module.exports = validateLogin;
