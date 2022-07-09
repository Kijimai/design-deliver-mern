const jwt = require("jsonwebtoken")
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

module.exports.getOneFeaturedArtist = (req, res) => {
  User.find({ userType: "artist", isFeatured: true })
    .then((foundArtists) => {
      const featuredArtist =
        foundArtists[Math.floor(Math.random() * foundArtists.length)]
      return res.json(featuredArtist)
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

module.exports.register = (req, res) => {
  console.log(req.body)
  User.create(req.body)
    .then((createdUser) => {
      const payload = { id: createdUser._id }
      const userToken = jwt.sign(payload, process.env.JWT_SECRET)

      return res
        .cookie("userToken", userToken, { httpOnly: true })
        .json({ message: "Successfully registered user!", createdUser })
    })
    .catch((error) => {
      return res.status(400).json({ message: "Something went wrong!", error })
    })
}
