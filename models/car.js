"use strict"
module.exports = (sequelize, DataTypes) => {
  const CONSTANTS = {
    TYPE: {
      BANK: "Bank",
      INSTALLMENT: "Installment",
      AUCTION: "Auction",
    },
    CONDITION: {
      USED: "مستخدم",
      NEW: "جديد",
    },
  }
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
      type: DataTypes.STRING,
      kilometer: DataTypes.INTEGER,
      bankId: DataTypes.INTEGER,
      downpayment: DataTypes.INTEGER,
      installment: DataTypes.INTEGER,
      condition: {
        type: DataTypes.STRING,
        defaultValue: CONSTANTS.NEW,
      },
      installmentcount: DataTypes.INTEGER,
      description: DataTypes.STRING,
    },
    {}
  )

  car.associate = function (models) {
    car.belongsTo(models.brands)
    car.belongsTo(models.sub)
  }
  return car
}
