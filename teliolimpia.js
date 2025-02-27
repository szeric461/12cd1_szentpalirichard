const express = require("express")
const app = express()
const bodyparser = require("body-parser")


app.use(bodyparser.json())

app.get("/" , (req, res) => {
    res.send("Működik a szerver.")
})

app.listen(3000, () => {
    console.log("A téliolimpia szervere a 3000-es porton fut.")
})