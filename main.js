// const Sequelize = require('sequelize');
// var express = require('express');
// var cors = require('cors');
// var app = express();



// const sequelize = new Sequelize(process.env.DATABASE_URL);

// sequelize 
//   .authenticate()
//   .then(() => {
//     console.log('Conexion con Base de Datos establecida.');
//   })
//   .catch(err => {
//     console.error('No se pudo conectar, error:', err);
//   });

// var allowedOrigins = ['http://localhost:4200'];

// app.use(cors({
//   origin: function(origin, callback){
//     // allow requests with no origin 
//     // (like mobile apps or curl requests)
//     if(!origin) return callback(null, true);
//     if(allowedOrigins.indexOf(origin) === -1){
//       var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// }));

// let puerto = process.env.PORT || 8080
// app.listen(puerto, function () {
//   console.log('App corriendo en puerto: '+puerto);
// });