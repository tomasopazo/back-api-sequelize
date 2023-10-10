const { Sequelize } = require('sequelize');
// hace falta crear una bd en phpmyadmin y encender el servidor en XAMPP
const sequelize = new Sequelize( //cambiar los datos por los datos por defecto en phpmyadmin 
  // database_name: el que pongamos nosotros, user:root, password:'' 
    'practicaaa','root','',{
        host: 'localhost',
        dialect: 'mysql',
        port: 3306,// se puede cambiar el tipo de db cambiando solo el dialect, por ejemplo : dialect: 'psql'(postgreSQL)
    }
);


module.exports= sequelize;//se crea una instancia de la bd 