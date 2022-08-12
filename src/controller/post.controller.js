const postServices = require('../services/post.services');

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postServices.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getAllPosts };
