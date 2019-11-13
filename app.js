import express from 'express';
import morgan from 'morgan';
import database from './conneccionDB';

//importamos rutas
import rutasProducto from './rutas/productos.route'
import rutasCliente from './rutas/clientes.route'
import rutasFactura from './rutas/facturas.route'
import rutasItemFactura from './rutas/itemfactura.route'
//inicilizar express
const app = express();

//middleware
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