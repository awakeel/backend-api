module.exports = (sequelize, DataTypes) => {
  const subBrands = sequelize.define(
    "subBrands",
    {
      title: DataTypes.STRING,
    },
    {}
  )
  subBrands.associate = function(models) {
    subBrands.belongsTo(models.brands)
    subBrands.hasMany(models.car)
  }
  return subBrands
}
