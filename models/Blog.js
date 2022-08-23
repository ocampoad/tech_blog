const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {};

Blog.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
        },
        blogTitle: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: [0,24]
            },
        },
        blogPost: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                len: [0,256]
            },
        },
        datePosted: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        userId: {
            type: DataTypes.UUID,
            references: {
                model: 'users',
                key: 'id',
            },
        }
    },
    {
        sequelize,
        modelName: 'blogs'
    }
);

module.exports = Blog