const users = require('./users');
const blogs = require('./blogs');
const { User, Blog } = require('../models');
const sequelize = require('../config/connection');

const seeder = async () => {
    await sequelize.sync({force:false});
    await User.bulkCreate(users);
    await Blog.bulkCreate(blogs);
    process.exit(0);
};

(async () => {
    await seeder();
})();