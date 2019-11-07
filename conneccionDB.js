import Sequelize from 'sequelize'

const database = new Sequelize(process.env.DATABASE_URL);

export default database