const { car, brands, sub, Sequelize, sequelize } = require("../models")
function getCarById(id) {
  return car.findAll({
    include: [
      {
        model: brands,
        attributes: [["title", "brand"], "cls"],
      },
      {
        model: sub,
        attributes: [["title", "sub"]],
        aliases: "sub",
      },
    ],
    where: { id: id },
  })
}

module.exports = {
  getCarById,
}
