'use strict';

//JSdocs
/**
 * @param {import('sequelize').queryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
*/

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('post_categories', {
      postId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'BlogPosts',
          key: 'id'
        }
      },
      categoryId: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Categories',
          key: 'id'
        }
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('post_categories');
  }
};
