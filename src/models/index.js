const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql'
    }
);

const db = {};
db.sequelize = sequelize;
db.models = {};
db.models.Sample = require("./sampleModel")(sequelize, Sequelize.DataTypes);

module.exports = db;