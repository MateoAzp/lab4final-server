import Sequelize from 'sequelize';
import database from '../conneccionDB.js';

const Cliente = database.define('clientes', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: Sequelize.STRING(80),
    allowNull: false,
    validate: {
        len: [4,80]
    }

  },
  cuit: {
    type: Sequelize.STRING(11),
    allowNull: false,
    validate: {
        len: [10, 11]
    }
  },
  direccion: {
      type: Sequelize.STRING(120),
      allowNull : true,
      validate: {
        len: [0, 120]
      }
  }
})

export default Cliente;