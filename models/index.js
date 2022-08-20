const  User  = require('./User');
const  Blog  = require('./Blog');

User.hasMany(Blog, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });
Blog.belongsTo(User, { foreignKey: { allowNull: false }, onDelete: 'CASCADE' });

module.exports = {
    User,
    Blog
};
