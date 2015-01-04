/*---[JADE]---(2/8)

Create an Express.js app with a home page (/home) rendered by jade template engine, that shows current date (toDateString).
*/

var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/home", function(req, res) {
    res.render(process.argv[3], {date: new Date().toDateString()});
});
app.listen(process.argv[2]);
