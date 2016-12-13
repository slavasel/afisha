var mongoose = require('mongoose');

var schemaJSON = {
	"name": {type: "String", text: true},
	"place": {type: "String", text: true},
	"coords": {
		lat: "Number",
		lng: "Number"
	},
	"image": "String",
	"startTime": "Date",
	"description": {type: "String", text: true}
};

var schema = mongoose.Schema(schemaJSON);
schema.index({
	name: 'text',
	description: 'text'
});
module.exports = schema;