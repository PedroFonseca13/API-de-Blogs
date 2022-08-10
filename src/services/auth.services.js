require('dotenv').config();
const jwtService = require('./jwt.services');
const passwordService = require('./password.services');

const authMiddleware = require('../middleware/authMiddleware');

const { User } = require('../database/models');
