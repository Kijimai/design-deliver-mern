const UserController = require("../controllers/user.controllers")

module.exports = (app) => {
  app.get("/api/all_artists", UserController.getAllArtists)
  app.post('/api/users/new', UserController.addUser)
}

