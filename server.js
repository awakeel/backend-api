const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const cors = require("cors")
const app = express()

var debug = require("debug")("express-sequelize")

// parse requests of content-type - application/json
app.use(bodyParser.json())
//const uploadPath = path.join(__di c(__dirname + "/public"))
app.use("/uploads", express.static(__dirname + "/public/uploads"))
//app.use("/uploads", express.__dirname(__dirname + "/public/uploads"))
// Cross domain

app.use(cors())

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// simple route
app.get("/", (req, res, next) => {
  next()
})

app.use("/api/", require("./routes"))
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
function onListening() {
  var addr = server.address()
  var bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port
  debug("Listening on " + bind)
}
