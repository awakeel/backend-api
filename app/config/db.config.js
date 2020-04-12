require("dotenv").config()
const Sequelize = require("sequelize")
// Option 1: Passing parameters separately
const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect:
      process.env
        .DIALECT /* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */,
  }
)
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.")
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err)
  })
module.exports = { sequelize, Sequelize }
