const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// const User = require('./User');
// const Post = require('./Post');

class Comment extends Model {}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment',
  }
);

// Comment.belongsTo(User, { foreignKey: 'userId', onDelete: 'CASCADE' });
// Comment.belongsTo(Post, { foreignKey: 'postId', onDelete: 'CASCADE' });

module.exports = Comment;
