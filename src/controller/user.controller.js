const userServices = require('../services/user.services');

const getAllUsers = async (_req, res) => {
  try {
    const users = await userServices.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await userServices.createUser({ displayName, email, password, image });

    if (!user) return res.status(409).json({ message: 'User already registered' });

    res.status(201).json({ token: user });
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const findUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userServices.findUser(id);
    // console.log('Bug#2 ', user);

    if (!user) return res.status(404).json({ message: 'User does not exist' });

    res.status(200).json(user);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getAllUsers, createUser, findUser };
