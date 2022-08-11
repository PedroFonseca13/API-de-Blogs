require('dotenv').config();
const jwt = require('jsonwebtoken');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ message: 'Token not found' });

  try {
    const { data } = jwt.verify(authorization, process.env.JWT_SECRET);
    req.user = data;
    next();
  } catch (_error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;
