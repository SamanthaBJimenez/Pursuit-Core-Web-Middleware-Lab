const express = require("express")
const cors = require("cors")
const port = 3000
const app = express()
app.use(cors())

const animals = ["lion","panda","zebra","fox","wolf","liger","tiger"]

const isAnimal = (req,res,next) => {
  if(animals.includes(req.params.species)){
    next();
  } else {
    res.json({status: "failure", message: animals.includes(req.params.species)})
  }
}

app.get("/animal/:species", isAnimal, (req,res) => {
  res.json({status: "success", message: animals.includes(req.params.species)})

})

app.listen(port, () => {
  console.log("YKTFV")
})