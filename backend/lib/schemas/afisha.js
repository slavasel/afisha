var mongoose = require('mongoose');

var schemaJSON = {
	"name": "String",
	"place": "String",
	"coords": {
		lat: "Number",
		lon: "Number"
	},
	"image": "String",
	"startTime": "Date"
}

var schema = mongoose.Schema(schemaJSON);
module.exports = schema;