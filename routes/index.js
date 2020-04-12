const { subBrands, brands, car, Sequelize, sequelize } = require("../models")
var express = require("express")
var router = express.Router()
router.get("/brands", function (req, res) {
  brands
    .findAll({
      attributes: [["title", "brand"], "id", "cls", "createdAt"],
    })
    .then(function (sub) {
      res.json(sub)
    })
    .catch((err) => {
      throw err
    })
})
router.get("/subbrands", function (req, res) {
  subBrands
    .findAll({
      attributes: [["title", "sub"]],
      include: [
        {
          model: brands,
          attributes: [["title", "brand"]],
        },
      ],
    })
    .then(function (sub) {
      res.json(sub)
    })
    .catch((err) => {
      throw err
    })
})
router.get("/cars", function (req, res) {
  car
    .findAll({
      include: [
        {
          model: brands,
          attributes: [["title", "brand"], "cls"],
        },
        {
          model: subBrands,
          attributes: [["title", "sub"]],
        },
      ],
    })
    .then(function (cars) {
      res.json(cars)
    })
    .catch((err) => {
      throw err
    })
})
router.get("/car/:id", function (req, res) {
  const id = req.params.id
  car
    .findAll({
      include: [
        {
          model: brands,
          attributes: [["title", "brand"], "cls"],
        },
        {
          model: subBrands,
          attributes: [["title", "sub"]],
          aliases: "sub",
        },
      ],
      where: { id: id },
    })
    .then(function (cars) {
      res.json(cars)
    })
    .catch((err) => {
      throw err
    })
})
module.exports = router
