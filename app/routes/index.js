const cars = require("./cars.routes")
const brands = require("./brands.routes")
module.exports = app => {
  cars(app), brands(app)
}
