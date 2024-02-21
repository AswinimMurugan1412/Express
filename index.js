const express = require("express")

var app = express();

var things = require('./Thins.js')

app.use('/Things',things)

app.listen(3000)