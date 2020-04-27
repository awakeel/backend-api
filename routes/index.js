const { banks, sub, brands, car, Sequelize, sequelize } = require("../models")
const { getCarById } = require("../controllers/car")
const { getBanks } = require("../controllers/banks")
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
  car
    .create({ ...req.body })
    .then((a) => {
      console.log(a)
      getCarById(a.id).then((data) => {
        res.json(data[0])
      })
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
      where: { brandId: brandId },
    })
    .then(function (sub) {
      res.json(sub)
    })
    .catch((err) => {
      throw err
    })
})

router.get("/cars", function (req, res) {
  const filters = {}
  const query = req.query
  let sort = "DESC"
  if (req.query) {
    query.brand ? (filters["brandId"] = query.brand) : ""
    query.sub ? (filters["subId"] = query.sub) : ""
    query.city ? (filters["city"] = query.city) : ""
    query.color ? (filters["color"] = query.color) : ""
    query.year ? (filters["model"] = query.year) : ""
    query.sort == "1" ? (sort = "ASC") : "DESC"
  }
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
      where: filters,
      order: [["createdAt", sort]],
    })
    .then(function (cars) {
      //setTimeout(function () {
      res.json(cars)
      //}, 2000)
    })
    .catch((err) => {
      throw err
    })
})
router.get("/car/:id", function (req, res) {
  const id = req.params.id
  getCarById(id)
    .then(function (cars) {
      res.json(cars)
    })
    .catch((err) => {
      throw err
    })
})
router.get("/banks", function (req, res) {
  getBanks().then((result) => {
    res.json(result)
  })
})
module.exports = router
