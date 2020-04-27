const { users, Sequelize, sequelize } = require("../models")
var express = require("express")
const jwt = require("jsonwebtoken")

const router = express.Router()
router.post("/login", (req, res, next) => {
  console.log(req.body)
  const username = req.body.username
  const password = req.body.password
  users
    .findOne({
      where: { username: username, password: password },
    })
    .then((result, error) => {
      if (result) {
        if (error) {
          res.json(" Username or password not match")
        } else {
          const token = jwt.sign(
            { user: username },
            process.env.ACCESS_TOKEN || "mawthog"
          )
          res.json({ accessToken: token })
        }
      }
    })
})

module.exports = router
