const categoriesServices = require('../services/categories.services');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoriesServices.createCategory({ name });
    console.log('Bug', category);
    res.status(201).json(category);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const findCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const category = await categoriesServices.findCategory(name);

    res.status(201).json(category);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { createCategory, findCategory };
