require('dotenv').config();
const jwt = require('jsonwebtoken');

const createToken = (user) => {
  const token = jwt.sign({
    data: user,
  }, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  return token;
};

const validateToken = (token) => {
  try {
    /* Através do método verify, podemos validar e decodificar o nosso jwt */
    const { data } = jwt.verify(token, process.env.JWT_SECRET);

    return data;
  } catch (_error) {
    const error = new Error('Token invalid');
    error.name = 'UnauthorizedError';
    throw error;
  }
};

module.exports = { createToken, validateToken };
