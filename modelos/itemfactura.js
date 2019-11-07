import Sequelize from 'sequelize';
import database from '../conneccionDB.js';

const ItemFactura = database.define('facturas_item', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idfactura: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  cantidad: {
    type: Sequelize.INTEGER,
    allowNull : false,
    validate: {
        min:1
    }
  },  
  fechaEmision: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  puntoDeVenta: {
      type: Sequelize.INTEGER,
      allowNull : true,
      validate: {
        min: 0
      }
  },
  idproducto: {
    type: Sequelize.INTEGER,
    allowNull : false,
  },  
  precioUnitario: {
    type: Sequelize.DECIMAL,
    allowNull : false,
    validate: {
      min: 1
    }
  },
  iva: {
    type: Sequelize.DECIMAL,
    allowNull : false,
    validate: {
        min: 1
    }
  },
  subtotal: {
    type: Sequelize.DECIMAL,
    allowNull : false,
    validate: {
      min: 1
    }
  }
})

ItemFactura.hasMany(Producto, {foreignKey: 'idproducto'})
Producto.belongsTo(ItemFactura, {foreignKey: 'idproducto'})

export default Prodsucto;