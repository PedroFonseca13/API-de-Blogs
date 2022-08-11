const Joi = require('joi');

const validateCategory = (req, res, next) => {
  const { body } = req;

  const schema = Joi.object().keys({
    name: Joi.string().required(),
  });

  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = validateCategory;
