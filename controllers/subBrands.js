"use strict"

const { subBrands, Brands } = require("../models")
module.exports = () => {
  getAll = async () => {
    const sub = await subBrands.findAll({
      include: [
        {
          model: Brands,
          where: { id: Sequelize.col("subBrands.brandid") },
        },
      ],
    })
    console.log(sub)
    if (!sub) {
      throw error("error")
    }
    return sub
  }
}
