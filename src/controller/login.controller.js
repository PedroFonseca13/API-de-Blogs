const loginServices = require('../services/login.services');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const credentialsUser = await loginServices.credentials({ email, password });

    if (!credentialsUser) {
      return res.status(400).json({ message: 'Invalid fields' });
    }

    return res.status(200).json({ token: credentialsUser });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = loginController;
