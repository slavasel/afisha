var mongoose = require('mongoose');

module.exports = {
	start: (cb) => {
		if (mongoose.connection) {
			mongoose.connection.close();
		}

		mongoose.connect('mongodb://localhost:27017/afishaDB');
		var db = mongoose.connection;
		db.on('error', console.error.bind(console, 'connection error:'));

		db.once('open', () => {
			cb();
		})
	},

	close: () => {
		var db = mongoose.connection;
		db.close();
	}
};