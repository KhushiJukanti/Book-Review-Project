const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


mongoose.connect("mongodb://localhost:27017/book-project")


const app = express();
app.use(cors())

app.get('/', function (req, res) {
    res.send("Hello Khushi")
})

app.listen(7000, () => {
    console.log("server is running at port 7000")
})