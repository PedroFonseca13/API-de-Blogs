'use strict';

//JSdocs
/**
 * @param {import('sequelize').Sequelize} sequelize
 * @param {import('sequelize').DataTypes} DataTypes
*/

const createPostCategoryModel = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      foreignKey: true,
      type: DataTypes.INTEGER
    },
    categoryId: {
      foreignKey: true,
      type: DataTypes.INTEGER
    }
  }, {
    tableName: 'PostCategories', timestamps: false,
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    })

    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  }


  return PostCategory;
};

module.exports = createPostCategoryModel
