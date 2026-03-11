var express = require("express");
var path = require("path");

var app = express();
var PUERTO = 3000;

app.use(express.static(path.join(__dirname)));

app.listen(PUERTO, function () {
    console.log("Servidor corriendo en http://localhost:" + PUERTO);
});
