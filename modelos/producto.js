import Sequelize from 'sequelize';
import database from '../conneccionDB.js';
import ItemFactura from './itemfactura'
const Producto = database.define('productos', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        len: [4,50]
    }

  },
  codigo: {
    type: Sequelize.STRING(50),
    allowNull: false,
    validate: {
        len: [1, 50]
    }
  },
  descripcion: {
    type: Sequelize.STRING(300),
    allowNull: true,
    validate: {
        len: [0, 300]
    }
  },
  precio: {
      type: Sequelize.DECIMAL(19,2),
      allowNull : false,
      validate: {
        min: 1
      }

  }

})

Producto.hasOne(ItemFactura, {foreignKey: 'idproducto'})
//Producto.hasOne(Factura, {foreignKey: 'idcliente'})
export default Producto;