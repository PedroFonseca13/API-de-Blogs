const postServices = require('../services/post.services');

const getAllPosts = async (_req, res) => {
  try {
    const posts = await postServices.getAllPosts();

    res.status(200).json(posts);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
    const postBody = { ...req.body, userId: req.user.id };

    const post = await postServices.createPost(postBody);

    if (!post) return res.status(400).json({ message: '"categoryIds" not found' });

    res.status(201).json(post);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postServices.getPostById(id);

    if (!post) return res.status(404).json({ message: 'Post does not exist' });

    res.status(200).json(post);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

const editPost = async (req, res) => {
  try {
    const post = await postServices.editPost({
      ...req.body, idUser: req.user.id, idParam: req.params.id,
    });

    if (!post) return res.status(401).json({ message: 'Unauthorized user' });

    return res.status(200).json(post);
  } catch (error) {
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { getAllPosts, createPost, getPostById, editPost };
