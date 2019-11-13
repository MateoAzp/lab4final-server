import Sequelize from 'sequelize'

// const database = new Sequelize('postgres://gifayvwoveziwh:07a7439621a27e3bdf7a61ea4f21f867bb15b3d2bffa9613f3da569fee29c72a@ec2-174-129-227-51.compute-1.amazonaws.com:5432/dfmc0c0ql3c37e');

const database = new Sequelize(
  "dfmc0c0ql3c37e", "gifayvwoveziwh", "07a7439621a27e3bdf7a61ea4f21f867bb15b3d2bffa9613f3da569fee29c72a",
  {
    dialect: 'postgres',
    dialectOptions: {
        ssl: true
    },
    protocol: 'postgres',
    host: 'ec2-174-129-227-51.compute-1.amazonaws.com'
  }
);

export default database