const { Category, User, BlogPost, PostCategory } = require('../database/models');

const getAllPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      {
        model: User, as: 'user', attributes: { exclude: ['password'] },
      },
      { model: Category, as: 'categories' },
    ],
  });

  return posts;
};

const createPost = async ({ title, content, categoryIds, userId }) => {
  const category = await Category.findOne({
    where: { id: categoryIds },
  });

  if (!category) return false;

  const post = await BlogPost.create({
    title,
    content,
    userId,
    published: Date.now(),
    updated: Date.now(),
  });

  categoryIds.forEach(async (categoryId) => {
    await PostCategory.create({
      postId: post.id,
      categoryId,
    });
  });

  return post;
};

const getPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      {
        model: User,
        as: 'user',
        attributes: {
          exclude: ['password'],
        },
      },
      { model: Category, as: 'categories' },
    ],
  });

  return post;
};

const editPost = async ({ title, content, idUser, idParam }) => {
  const post = await BlogPost.findOne({ where: { id: idParam, userId: idUser } });
  if (!post) return false;

  await post.update({
    title,
    content,
    updated: Date.now(),
  });

  const result = await BlogPost.findOne({
    where: { userId: idUser },
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories' },
    ],
  });

  return result;
};

const deletePost = async (idUser, idParam) => {
  const verifyId = await BlogPost.findOne({ where: { id: idParam } });
  if (!verifyId) return 'NOT_FOUND';

  const post = await BlogPost.findOne({ where: { id: idParam, userId: idUser } });
  if (!post) return 'UNAUTHORIZED';

  const result = await post.destroy(
    {
      where: { id: idParam },
    },
  );
  return result;
};

module.exports = { getAllPosts, createPost, getPostById, editPost, deletePost };
