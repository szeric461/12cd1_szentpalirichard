const express = require("express")
const app = express()
const bodyparser = require("body-parser")
const cors = require("cors")
const mysql = require("mysql")

app.use(cors())
app.use(bodyparser.json())

const db = mysql.createConnection(
    {
    user: "root",
    host: "localhost",
    port: 3307,
    password: "",
    database: "teliolimpia"
    }
)

app.get("/" , (req, res) => {
    res.send("Működik a szerver.")
})

app.listen(3000, () => {
    console.log("A téliolimpia szervere a 3000-es porton fut.")
})