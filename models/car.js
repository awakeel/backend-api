"use strict"
module.exports = (sequelize, DataTypes) => {
  const car = sequelize.define(
    "car",
    {
      price: DataTypes.STRING,
      city: DataTypes.STRING,
      color: DataTypes.STRING,
      fueltype: DataTypes.STRING,
      gear: DataTypes.STRING,
      incomingtype: DataTypes.STRING,
      model: DataTypes.STRING,
      pictures: DataTypes.STRING,
      price: DataTypes.STRING,
      quantity: DataTypes.INTEGER,
      specifications: DataTypes.STRING,
      terms: DataTypes.INTEGER,
      brandId: DataTypes.INTEGER,
      subId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
    },
    {}
  )
  car.associate = function (models) {
    car.belongsTo(models.brands)
    car.belongsTo(models.sub)
  }
  return car
}
