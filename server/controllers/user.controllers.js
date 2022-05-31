const { User } = require("../models/user.models")

module.exports.getAllUsers = (req, res) => {
  User.find({})
    .then((foundUsers) => res.json(foundUsers))
    .catch((error) => {
      return res
        .status(400)
        .json({ message: "Something went horribly wrong!", error })
    })
}

module.exports.getAllEmployers = (req, res) => {
  User.find({ userType: "employer" })
    .then((foundUsers) => res.json(foundUsers))
    .catch((error) => {
      return res
        .status(400)
        .json({ message: "Something went horribly wrong!", error })
    })
}

module.exports.getAllArtists = (req, res) => {
  User.find({ userType: "artist" })
    .then((foundUsers) => res.json(foundUsers))
    .catch((error) => {
      return res
        .status(400)
        .json({ message: "Something went horribly wrong!", error })
    })
}

module.exports.getOneUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((foundUser) => {
      return res.json(foundUser)
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong!", error })
    })
}

module.exports.updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedUser) => {
      return res.json(updatedUser)
    })
    .catch((error) => {
      return res
        .status(400)
        .json({ message: "Something went wrong during update!", error })
    }) 
}

module.exports.addUser = (req, res) => {
  const { fName, lName, email, password, userType } = req.body
  User.create({
    fName,
    lName,
    email,
    password,
    userType,
  })
    .then((createdUser) => {
      return res.json(createdUser)
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong!", error })
    })
}
