// models/Publicacion.js
const { Sequelize, Model, DataTypes,  } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./userModels');

class Post extends Model { }

// Define los campos del modelo de Publicacion
Post.init({
  postsId: {
    type:DataTypes.INTEGER,
    primaryKey : true ,
    autoIncrement:true,
    allowNull:false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: true, // Puedes ajustar esto según tus necesidades
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    foreignKey: 'userId'
  }
},
  {
    sequelize,
    modelName: 'Post',
  });



  
Post.sync().then(() => {
  console.log('La tabla de Post ha sido creada');
})
  .catch((error) => {
    console.error('Error al crear la tabla de Post: ', error);
  });

module.exports = Post;
// Define la relación inversa entre Usuario y Publicaciones

