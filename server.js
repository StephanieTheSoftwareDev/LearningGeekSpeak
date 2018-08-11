//=====*****===== CONFIG Section =====*****=====//
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use(bodyParser.json());

var path = require('path');
app.use( express.static( __dirname + '/client/dist' ));

var mongoose = require('mongoose');
//^^^^^^^^^^^^^^^ END of CONFIG Section ^^^^^^^^^^^^^^^//




//=====*****===== ROUTING Section =====*****=====//
app.all("*", (req, res, next) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
});
//^^^^^^^^^^^^^^^ END of Section ^^^^^^^^^^^^^^^//






//=====*****===== LISTENER Section =====*****=====//
app.listen(8000, function() {
    console.log("Listening on port 8000")
})