const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });

  return category;
};

const findCategory = async () => {
  const category = await Category.findAll();

  return category;
};

module.exports = { createCategory, findCategory };
