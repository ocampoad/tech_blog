const  User  = require('./User');
const  Blog  = require('./Blog');

Blog.belongsTo(User);
User.hasMany(Blog);

module.exports = {
    User,
    Blog
};
