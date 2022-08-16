const Joi = require('joi');

const validateEdit = async (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    title: Joi.string().required()
      .messages({ 'string.empty': 'Some required fields are missing' }),
    content: Joi.string().required()
      .messages({ 'string.empty': 'Some required fields are missing' }),
  });

  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = validateEdit;
