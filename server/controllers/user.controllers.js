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

module.exports.getAllArtists = (req, res) => {
  User.find({ userType: "artist" })
    .then((foundUsers) => res.json(foundUsers))
    .catch((error) => {
      return res
        .status(400)
        .json({ message: "Something went horribly wrong!", error })
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

