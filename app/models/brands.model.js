import { sequelize, Sequelize } from "../config/db.config"
const Brands = sequelize.define(
  "brands",
  {
    // attributes
    id: {
      type: Sequelize.NUMBER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    cls: {
      type: Sequelize.STRING,
      // allowNull defaults to true
    },
  },
  {
    // options
  }
)
module.exports = Brands
