const UserController = require("../controllers/user.controllers")

module.exports = (app) => {
  app.get("/api/all_artists", UserController.getAllArtists)
  app.get("/api/all_employers", UserController.getAllEmployers)
  app.get("/api/artists/:id", UserController.getOneUser)
  app.post('/api/users/new', UserController.addUser)
}

