import Sequelize from 'sequelize';
import database from '../conneccionDB.js';

const Cliente = database.define('clientes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        len: [4,80]
    }

  },
  cuit: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        len: [15, 15]
    }
  },
  direccion: {
      type: Sequelize.STRING,
      allowNull : true,
      validate: {
        len: [0, 120]
      }
  }

})

export default Cliente;