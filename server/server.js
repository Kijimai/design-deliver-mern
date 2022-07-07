require("dotenv").config()

const express = require("express")
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 8000
const cookieParser = require("cookie-parser")

require("./config/mongoose.config")

app.use(cookieParser())
app.use(
  cors({ credentials: true, origin: "http://localhost:3000" }),
  express.urlencoded({ extended: true }),
  express.json()
)

require("./routes/user.routes")(app)
require("./routes/project.routes")(app)

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})
