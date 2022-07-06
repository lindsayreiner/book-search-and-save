const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model { }

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        authors: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;