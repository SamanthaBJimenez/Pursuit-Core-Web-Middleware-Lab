const express = require("express")
const cors = require("cors")
const port = 4000
const app = express()
app.use(cors())

let randomNumber;

const generateSpread = (req, res, next) => {
    const newArr = [];
    for (let i = Number(req.params.floor); i <= Number(req.params.ceiling); i++) {
        newArr.push(i);
    }
    // randomNumber = Math.floor((Math.random() * (newArr[newArr.length - 1] - newArr[0] + 1)) + newArr[0]);
    randomNumber = newArr[Math.floor(Math.random() * newArr.length)]
    // Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(newArr);
    next();
}

const randomNum = (fl, ceil) => {
    return Math.floor((Math.random() * ceil) + fl);
}

app.get("/random/:floor/:ceiling", generateSpread, (req,res) => {
  res.json({
      status: "success",
      range: [req.params.floor, req.params.ceiling],
      randPick: randomNumber
  });
})

app.listen(port, () => {
    console.log("Listening on port ", port);
})