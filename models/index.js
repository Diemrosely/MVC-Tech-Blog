const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// TODO: What is the purpose of this file? Is it necessary?

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});



module.exports = { User, Post, Comment, };
