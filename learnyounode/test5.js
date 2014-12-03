/*---[FILTERED LS]---(05/13)

Create a program that prints a list of files in a given directory, filtered by the extension of the files. You will be provided a directory name as the first argument to your program (e.g. '/path/to/dir/') and a file extension to filter by as the second argument.

For example, if you get 'txt' as the second argument then you will need to filter the list to only files that end with .txt. Note that the second argument will not come prefixed with a '.'.

The list of files should be printed to the console, one file per line. You must use asynchronous I/O.

*/

var fs = require("fs");
var path = require("path");

fs.readdir(process.argv[2], function callback(err, file) {
    if (err) {
    } else {
	for (var i = 0; i < file.length; i++) {
	    if (path.extname(file[i]) === "." + process.argv[3]) {
	    console.log(file[i]);
	    }
	}
    }
});


/*

var fs = require('fs')
var path = require('path')

fs.readdir(process.argv[2], function (err, list) {
    list.forEach(function (file) {
        if (path.extname(file) === '.' + process.argv[3])
            console.log(file)
    })
})

*/
