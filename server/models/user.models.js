const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: [true, "First Name is required!"],
      minLength: [2, "First Name must be at least 2 characters long!"],
    },
    lName: {
      type: String,
      required: [true, "Last Name is required!"],
      minLength: [2, "Last Name must be at least 2 characters long!"],
    },
    email: {
      type: String,
      required: [true, "Email field is required!"],
      minLength: [8, "Email must be at least 8 characters long!"],
    },
    avatar: {
      type: String,
    },
    password: {
      type: String,
      required: [true, "Password field is required!"],
      minLength: [8, "Password length must be at least 8 characters long!"],
    },
    expertise: {
      type: [String]
    },
    userType: {
      type: String,
      required: [true, "You must assign a role to this user!"],
      enum: ["artist", "employer"],
    },
  },
  { timestamps: true }
)

module.exports.User = mongoose.model("User", UserSchema)
