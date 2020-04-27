const { banks, Sequelize, sequelize } = require("../models")
function getBanks(id) {
  return banks.findAll()
}

module.exports = {
  getBanks,
}
