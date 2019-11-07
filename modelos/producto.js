import Sequelize from 'sequelize';
import database from '../conneccionDB.js';

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
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        len: [1, 300]
    }
  },
  precio: {
      type: Sequelize.DECIMAL,
      allowNull : false,
      validate: {
        min: 1
      }

  }

})

export default Producto;