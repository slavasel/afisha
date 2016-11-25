var mongoose = require('mongoose');

module.exports = {
	start: (cb) => {
		if (this.db) {
			this.db.close();
		}

		mongoose.connect('mongodb://localhost:27017/afishaDB');
		this.db = mongoose.connection;
		this.db.on('error', console.error.bind(console, 'connection error:'));

		this.db.once('open', () => {
			cb();
		})
	},

	close: () => {
		this.db.close();
	}
};