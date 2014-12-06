var fs = require("fs");
var path = require("path");

module.exports = function (location, extension, callback) {

    fs.readdir(location, function (err, list) {
	if (err) {
	    console.log("ERROR: " + err);
	    return callback(err);
	} else {
	    list = list.filter(function (file) {
		return path.extname(file) === '.' + extension;
	    });
	    
	    callback(null, list);
	}
    });
};
