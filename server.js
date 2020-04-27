const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()
var debug = require("debug")("express-sequelize")
app.use(bodyParser.json())
app.use("/uploads", express.static(__dirname + "/public/uploads"))
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api/", [require("./routes"), require("./routes/login")])
//app.use("/api/", require("./routes"))

// set port, listen for requests
const PORT = process.env.PORT || 3000
app.listen(PORT, function () {
  debug("Express server listening on port " + PORT)
})
app.on("error", onError)
app.on("listening", onListening)
function onError(error) {
  if (error.syscall !== "listen") {
    throw error
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges")
      process.exit(1)
      break
    case "EADDRINUSE":
      console.error(bind + " is already in use")
      process.exit(1)
      break
    default:
      throw error
  }
}
function authenticate(req, res, next) {
  const authHeader = req.headers["authorization"]
  console.log(authHeader)
  const token = authHeader && authHeader.split(" ")[1]
  console.log(token)
  if (token == null) return res.sendStatus(401)
  jwt.verify(token, "ACESS TOKEN", (error, user) => {
    if (error) return res.sendStatus(403)

    req.user = user
    next()
  })
}
function onListening() {
  var addr = server.address()
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
  debug("Listening on " + bind)
}
