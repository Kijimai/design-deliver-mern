const mongoose = require("mongoose")

mongoose
  .connect("mongodb://localhost/design_deliverDB")
  .then(() => {
    console.log(`Database connection established!`)
  })
  .catch((err) => {
    console.log("There was an error!", err)
  })
