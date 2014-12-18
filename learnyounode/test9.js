/*---[JUGGLING ASYNC]---(09/13)

This problem is the same as the previous problem (HTTP COLLECT) in that you need to use http.get(). However, this time you will be provided with three URLs as the first three command-line arguments.

You must collect the complete content provided to you by each of the URLs and print it to the console (stdout). You don't need to print out the length, just the data as a String; one line per URL. The catch is that you must print them out in the same order as the URLs are provided to you as command-line arguments.

*/

var http = require('http')
var bl = require('bl')
var results = []
var count = 0

function printResults () {
    for (var i = 0; i < 3; i++)
	console.log(results[i])
}

function httpGet (index) {
    http.get(process.argv[2 + index], function (response) {
	response.pipe(bl(function (err, data) {
	    if (err)
		return console.error(err);
	    
	    results[index] = data.toString();
	    count++;
	    
	    if (count == 3) {// yay! we are the last one!
		printResults();
	    }
	}))
    })
}

for (var i = 0; i < 3; i++) {
    httpGet(i);
}


/*

for(var i = 0; i <= 2; i++) {

    http.get(url[i], function callback (response) {
	response.setEncoding("utf8");
	response.on("data", function (data) {
	    res[i] += data;
	});
	response.on("error", function (err) {
	    return err;
	});
	response.on("end", function () {
	    console.log(res[i]);
	});
    });
    
}

*/

/*
  
var http = require("http");
var url = [process.argv[0], process.argv[1], process.argv[2]];
var res = [];
var ready = [false, false, false];

http.get(url[0], function callback (response) {
    response.setEncoding("utf8");
    response.on("data", function (data) {
	res[0] += data;
    });
    response.on("error" function (e) {
	
    });
    response.on("end", function () {
	ready[0] = true;
    });
});

http.get(url[1], function callback (response) {
    response.setEncoding("utf8");
    response.on("data", function (data) {
	res[1] += data;
    });
    response.on("end", function () {
	ready[1] = true;
    });
});

http.get(url[2], function callback (response) {
    response.setEncoding("utf8");
    response.on("data", function (data) {
	res[2] += data;
    });
    response.on("end", function () {
	ready[2] = true;
    });
});

if (ready[0] && ready[1] && ready [2]) {
    console.log(res[0]);
    console.log(res[1]);
    console.log(res[2]);
}

*/