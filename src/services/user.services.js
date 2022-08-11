const { User } = require('../database/models');
const { createToken } = require('./jwt.services');
// const validateBody = require('../middleware/validateBody');
const passwordHashing = require('./password.services');

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const createUser = async ({ displayName, email, password, image }) => {
  const findUser = await User.findOne({ where: { email } });
  if (findUser) return false;

  // const validate = validateBody({ displayName, email, password, image });

  const passwordEncrypted = passwordHashing.encryptPassword(password);
  const user = await User.create({
    displayName, email, password: passwordEncrypted, image,
  });
  const token = createToken(user);

  return token;
};

const findUser = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });
  // console.log('Bug#1 ', user);
  return user;
};

module.exports = { getAllUsers, createUser, findUser };
