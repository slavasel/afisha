exports.index = function(req,res,next) {
	var path = require('path')
	res.sendFile(path.resolve('static/index.html'));
};

exports.create = function(req,res,next) {
	res.send(' create routes params:'+req.params.name);
};