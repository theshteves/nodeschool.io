/*---[HTTP JSON API SERVER]---(13/13)

Write an HTTP server that serves JSON data when it receives a GET request to the path '/api/parsetime'. Expect the request to contain a query string with a key 'iso' and an ISO-format time as the value.

For example:

  /api/parsetime?iso=2013-08-10T12:10:15.474Z

The JSON response should contain only 'hour', 'minute' and 'second' properties. For example:

    {
      "hour": 14,
      "minute": 23,
      "second": 15
    }

Add second endpoint for the path '/api/unixtime' which accepts the same query string but returns UNIX epoch time under the property 'unixtime'. For example:

    { "unixtime": 1376136615474 }

Your server should listen on the port provided by the first argument to your program.

*/

var http = require("http");
var url = require("url");
var map = require("through2-map");

var answer = {

    "/api/parsetime": function(parsedUrl) {
	now = new Date(parsedUrl.query.iso);

	return {
	    hour: now.getHours(),
	    minute: now.getMinutes(),
	    second: now.getSeconds()
	};
    },

    "/api/unixtime": function(parsedUrl) {
	return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
    }
}

var server = http.createServer(function(req, res) {

    parsedUrl = url.parse(req.url, true);
    ans = answer[parsedUrl.pathname];

    if (ans) {
	res.writeHead(200, {"Content-Type": "application/json"});
	res.end(JSON.stringify(ans(parsedUrl)));
    }
}).listen(process.argv[2]);

/*
  var http = require('http')
  var url = require('url')

  function parsetime (time) {
  return {
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
  }
  }

  function unixtime (time) {
  return { unixtime : time.getTime() }
  }

  var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  if (/^\/api\/parsetime/.test(req.url))
  result = parsetime(time)
  else if (/^\/api\/unixtime/.test(req.url))
  result = unixtime(time)

  if (result) {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  res.end(JSON.stringify(result))
  } else {
  res.writeHead(404)
  res.end()
  }
  })
  server.listen(Number(process.argv[2]))
*/
