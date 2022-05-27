const ProjectController = require("../controllers/project.controllers")

module.exports = (app) => {
  app.get("/api/all_projects", ProjectController.getAllProjects)
  app.get("/api/projects/:id", ProjectController.getOneProject)
  app.post("/api/projects/new", ProjectController.createProject)
  app.delete("/api/delete_projects", ProjectController.clearProjects)
}
