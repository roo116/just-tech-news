const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to our db
// const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
const sequelize = new Sequelize('just_tech_news_db', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 9,
    min: 0,
    idle: 10000
  },
  port: 3306
});



module.exports = sequelize;
