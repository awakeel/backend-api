"use strict"
module.exports = (sequelize, DataTypes) => {
  const Banks = sequelize.define(
    "banks",
    {
      name: DataTypes.STRING,
    },
    {}
  )
  Banks.associate = function (models) {
    Banks.hasMany(models.car)
  }
  return Banks
}
