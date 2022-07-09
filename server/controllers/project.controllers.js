const { Project } = require("../models/project.models")

module.exports.createProject = (req, res) => {
  console.log("Creating Project!")
  // Project.create(req.body)
  //   .then((createdProject) => {
  //     return res.json(createdProject)
  //   })
  //   .catch((error) => {
  //     return res.status(400).json({ message: "Something went wrong!", error })
  //   })
}

module.exports.getAllProjects = (req, res) => {
  Project.find({})
    .populate("author", "fName lName avatar _id userType")
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

// Dev method only
module.exports.clearProjects = (req, res) => {
  Project.deleteMany({})
    .then((res) => {
      return res.json({ message: "Deleted!" })
    })
    .catch((err) => {
      return res.json(err)
    })
}
