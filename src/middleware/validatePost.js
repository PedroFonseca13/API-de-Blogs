const Joi = require('joi');

const validatePost = (req, res, next) => {
  const { body } = req;

  const schema = Joi.object({
    title: Joi.string().required()
      .messages({ 'string.empty': 'Some required fields are missing' }),
    content: Joi.string().required()
      .messages({ 'string.empty': 'Some required fields are missing' }),
    categoryIds: Joi.array().required()
      .messages({
        'array.base': '"categoryIds" must be an array',
        'array.required': '"categoryIds" not found',
      }),
  });

  const { error } = schema.validate(body);

  if (error) {
    return res.status(400).json({ message: error.message });
  }

  next();
};

module.exports = validatePost;
