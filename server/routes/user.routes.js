const UserController = require("../controllers/user.controllers")

module.exports = (app) => {
  app.get("/api/all_artists", UserController.getAllArtists)
  app.get("/api/all_employers", UserController.getAllEmployers)
  app.get("/api/user/:id", UserController.getOneUser)
  app.get("/api/featured_artist", UserController.getOneFeaturedArtist)
  app.put("/api/user/edit/:id", UserController.updateUser)
  app.post("/api/users/new", UserController.addUser)
}
