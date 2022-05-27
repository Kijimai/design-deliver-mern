const { Project } = require("../models/project.models")

module.exports.createProject = (req, res) => {
  Project.create(req.body)
    .then((createdProject) => {
      return res.json(createdProject)
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong!", error })
    })
}

module.exports.getAllProjects = (req, res) => {
  Project.find({})
    .then((foundProjects) => {
      return res.json(foundProjects)
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong!", error })
    })
}

module.exports.getOneProject = (req, res) => {
  Project.findOne({ _id: req.body.id })
    .then((project) => {
      return res.json(project)
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong!", error })
    })
}

module.exports.clearProjects = (req, res) => {
  Project.deleteMany({})
    .then((res) => {
      return res.json({ message: "Deleted!" })
    })
    .catch((err) => {
      return res.json(err)
    })
}