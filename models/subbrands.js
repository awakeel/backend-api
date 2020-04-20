module.exports = (sequelize, DataTypes) => {
  const sub = sequelize.define(
    "sub",
    {
      title: DataTypes.STRING,
    },
    {}
  )
  sub.associate = function (models) {
    sub.belongsTo(models.brands)
    sub.hasMany(models.car)
  }
  return sub
}
