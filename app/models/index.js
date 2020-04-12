const fs = require("fs")
const path = require("path")
const Sequelize = require("sequelize")
const basename = path.basename(module.filename)
const models = {}
const sequelize = require("../config/db.config")
//const sequelizePaginate = require('sequelize-paginate');
models.isReady = new Promise(resolve => {
  fs.readdirSync(__dirname)
    .filter(
      file =>
        file.indexOf(".") !== 0 &&
        file !== basename &&
        file.slice(-3) === ".js" &&
        file.indexOf(".test.js") === -1
    )
    .forEach(file => {
      const model = sequelize.import(path.join(__dirname, file))
      //  sequelizeTransforms(model);
      // sequelizePaginate.paginate(model);
      models[model.name] = model
    })
  Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
      models[modelName].associate(models)
    }
  })

  resolve(true)
})

models.sequelize = sequelize
models.Sequelize = Sequelize
models.Op = Sequelize.Op
module.exports = models
