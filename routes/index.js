const { sub, brands, car, Sequelize, sequelize } = require("../models")
var express = require("express")
var multer = require("multer")
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/")
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + file.originalname)
  },
})
var upload = multer({ storage: storage })
var router = express.Router()
router.post("/upload", upload.single("car"), (req, res, next) => {
  res.json(req.file)
})

router.get("/config", function (req, res) {
  const b = []
  config.forEach((item) => {
    brands.create({ cls: item.cls, title: item.title }).then((a) => {
      let id = a.id
      item.sub.forEach((s) => {
        let obj = { brandId: id, title: s.title ? s.title : s }
        console.log(obj)
        sub.create(obj).then((x) => {})
      })
      res.send(a)
    })
  })
})
router.route("/car").post(function (req, res) {
  console.log(req.body)
  car
    .create({ ...req.body })
    .then(() => {
      res.json("Car added succesfuly.")
    })
    .error((data) => {
      res.json(data)
      throw data
    })
})
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
  const brandId = req.query.brandId
  sub
    .findAll({
      attributes: ["id", ["title", "sub"], "brandid"],
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
          model: sub,
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
          model: sub,
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
