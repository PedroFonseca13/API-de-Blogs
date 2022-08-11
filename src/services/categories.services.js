const { Category } = require('../database/models');

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });

  return category;
};

const getAllCategories = async () => {
  const category = await Category.findAll();

  console.log('FILHO DA PUTA =>', category);

  return category;
};

module.exports = { createCategory, getAllCategories };
