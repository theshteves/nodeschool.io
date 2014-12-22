/*---[TIME SERVER]---(10/13)

Write a TCP time server!

Your server should listen to TCP connections on the port provided by the first argument to your program. For each connection you must write the current date & 24 hour time in the format:

    "YYYY-MM-DD hh:mm"

followed by a newline character. Month, day, hour and minute must be zero-filled to 2 integers. For example:

    "2013-07-06 17:42"

*/

var net = require("net");

var date = new Date();

var month = date.getMonth() + 1;
var day = date.getDate();
if (day < 10) {
    day = "0" + day;
}

var currentDate = date.getFullYear() + "-" + month + "-" + day;
var currentTime = date.getHours() + ":" + date.getMinutes();
var display = currentDate + " " + currentTime;

var server = net.createServer(function (socket) {
    console.log(display);
    socket.write(display);
    socket.end();
});
server.listen(process.argv[2]);
