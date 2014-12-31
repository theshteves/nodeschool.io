/*---[JADE]---(2/8)

Create an Express.js app with a home page (/home) rendered by jade template engine, that shows current date (toDateString).

h1 Hello World
p Today is #{date}.

This is how to specify path in a typical Express.js app considering that the folder is 'templates':

app.set('views', path.join(__dirname, 'templates'))

However, to use our index.jade, the path to index.jade will be provided in the process.argv[3] value. You are welcome to use your own jade file!

To tell Express.js app what template engine to use, apply this line to Express.js configuration:

app.set('view engine', 'jade')

Instead of Hello Worlds res.end, the res.render function accepts filename and data:

res.render('index', {date: new Date().toDateString()})

We use toDateString() to simply return the date in a human readable format sans time.
    */

var express = require("express");
var app = express();

app.set("view engine", "jade");

app.get("/home", function(req, res) {
    res.render("index", {date: new Date().toDateString()});
});
app.listen(process.argv[2]);
