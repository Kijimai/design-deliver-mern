const { faker } = require("@faker-js/faker")
const { User } = require("./models/user.models")
const mongoose = require("mongoose")
mongoose
  .connect("mongodb://localhost/design_deliverDB")
  .then(() => {
    console.log(`Database connection established!`)
  })
  .catch((err) => {
    console.log("There was an error!", err)
  })

const db = mongoose.connection
db.on("error", console.error.bind(console, "connection error: "))
db.once("open", () => {
  console.log("Database connected")
})

const seedDatabase = async () => {
  await User.deleteMany({})
  for (let i = 1; i < 100; i++) {
    const randomNum = Math.floor(Math.random() * 100) + 1

    let userRole = randomNum <= 25 ? "employer" : "artist"

    let fName = faker.name.firstName()
    let lName = faker.name.lastName()
    let email = faker.internet.email()
    let password = faker.internet.password()
    let avatar = faker.image.avatar()
    let userType = userRole

    await User.create({ fName, lName, email, avatar, password, userType })
  }
}

seedDatabase().then(() => db.close())
