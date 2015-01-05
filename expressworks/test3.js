/*---[GOOD OLD FORM]---(3/8)

Write a route ('/form') that processes HTML form input (<form><input name="str"/></form>) and prints backwards the str value.

To parse x-www-form-urlencoded request bodies Express.js can use urlencoded() middleware
from the body-parser module.

Again, the port to use is passed expressworks to the application as process.argv[2].
*/

var express = require("express");
var app = express();
var bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended: false}));

app.get("/form", function(req, res) {
    res.send(req.body.str.split('').revers().join(''));
});
app.listen(process.argv[2]);

/* --- Post-exercise solution that didn't pass on subsequent trials (time for a pull request))

var express = require('express')
var bodyParser = require('body-parser')
var app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.post('/form', function(req, res) {
    res.send(req.body.str.split('').reverse().join(''))
})

app.listen(process.argv[2])
*/
