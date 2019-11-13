import Sequelize from 'sequelize';
import database from '../conneccionDB.js';
import Cliente from './cliente'
const Factura = database.define('facturas', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo: {
    type: Sequelize.CHAR,
    allowNull: false,
    validate: {
        len: [0,2]
    }
  },
  numero: {
    type: Sequelize.INTEGER,
    allowNull : false
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
  idcliente: {
    type: Sequelize.INTEGER,
    allowNull : false,
  },
  total: {
    type: Sequelize.DECIMAL,
    allowNull : false,
    validate: {
      min: 0
    }
}

})


//Factura.hasOne(Cliente, {foreignKey: 'idcliente'})
//Cliente.belongsTo(Factura, {foreignKey: 'idcliente'})
Cliente.hasOne(Factura, {foreignKey: 'idcliente'})
export default Factura;