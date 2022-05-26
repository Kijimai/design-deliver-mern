const { Project } = require("../models/project.models")

module.exports.createProject = (req, res) => {
  const {} = req.body
  Project.create()
    .then((createdProject) => {
      return res.json(createdProject)
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong!", error })
    })
}
