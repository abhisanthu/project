var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('restaurant', ['stockBookDetail', 'stockBookHeader', 'real']);
var bodyParser = require('body-parser');
var xoauth2 = require('xoauth2');
app.use(express.static("public"));
app.use(bodyParser.json());
var fs = require('fs');

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type,Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.get('/abhi', function (req, res) {

    console.log("this is '/abhi' path");

    db.stockBookDetail.find({}, function (err, docs) {

        res.json(docs);
        console.log(docs);
    });

});

app.get('/withincheck:at', function (req, res) {

    console.log("\n this is '/withincheck:at' path" + "\n");
    var lll = req.params.at;
    console.log(typeof (lll));

    var jk = parseInt(lll);
    console.log(jk);

    db.real.find({
        'stockpoint': jk
    }, function (err, docs) {
        //console.log(docs);
        res.json(docs);
        console.log(docs);
    });
});

var port = 9999;
app.listen(port);
console.log("server running on  " + port + "\n");
