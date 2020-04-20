"use strict"
module.exports = (sequelize, DataTypes) => {
  const Brands = sequelize.define(
    "brands",
    {
      title: DataTypes.STRING,
      cls: DataTypes.STRING,
    },
    {}
  )
  Brands.associate = function (models) {
    Brands.hasMany(models.sub)
    Brands.hasMany(models.car)
  }
  return Brands
}
