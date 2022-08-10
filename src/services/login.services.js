const { User } = require('../database/models');
const { createToken } = require('./jwt.services');

const credentials = async ({ email, password }) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return false;

  const userToken = createToken(user);

  return userToken;
};

module.exports = { credentials };
