module.exports = app => {
  const brands = require("../../controllers/brands.js")

  // Create a new car
  app.post("/brands", brands.create)

  // Retrieve all cars
  app.get("/brands", brands.findAll)

  // Retrieve a single car with carId
  app.get("/brands/:id", brands.findOne)
}
