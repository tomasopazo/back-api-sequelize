const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Post = require('./postModels');


class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},
    {
        sequelize,
        modelName: 'User'
    });

    //relacion entre tablas segun doc sequelize

    //belongTo=pertenece a ...
    //has many= puede tener muchos ...
      Post.belongsTo(User, { 
        foreignKey: "userId",
       });
    User.hasMany(Post, {
        foreignKey: 'postsId',
          });



User.sync().then(() => {
        console.log('La tabla de usuarios ha sido creada');
    })
    .catch((error) => {
        console.error('Error al crear la tabla de usuarios: ', error);
    });

module.exports = User;