const path = require("path")
// const notes = require('../controllers/users')

module.exports = (app) => {
    app.get("*", (req, res) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    })
}