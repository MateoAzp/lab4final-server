import express from 'express';
import morgan from 'morgan';
import database from './conneccionDB';

//importamos rutas
import rutasProducto from './rutas/productos.route'
import rutasCliente from './rutas/clientes.route'
import rutasFactura from './rutas/facturas.route'
import rutasItemFactura from './rutas/itemfactura.route'
//inicilizar express
var cors = require('cors');
const app = express();

//middleware
var origenesPermitidos = ['http://localhost:4200', 'http://localhost:4200/'];

app.use(cors({
  origin: function(origin, callback){
    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);
    if(origenesPermitidos.indexOf(origin) === -1){
      var msg = 'CORS activo la gorra';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));
app.use(morgan('dev'));
app.use(express.json());

//rutas
app.use('/api/productos', rutasProducto)
app.use('/api/clientes', rutasCliente)
app.use('/api/facturas', rutasFactura)
app.use('/api/itemfactura', rutasItemFactura)


//database.sync({ force: true })
database.sync()
  .then(() => console.log('Base de datos sincronizada'));

//exportamos app
export default app;