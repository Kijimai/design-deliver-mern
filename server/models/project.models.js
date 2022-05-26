const mongoose = require("mongoose")

const ProjectSchema = new mongoose.Schema({
  posterID: {
    type: String,
    required: [true, "Poster ID is required on submission!"],
  },
  title: {
    type: String,
    required: [true, "Job title is required!"]
  },
  postContent: {
    type: String,
    required: true,
  },
  neededExpertise: {
    type: [String],
  },
})

module.exports.Project = mongoose.model("Project", ProjectSchema)
