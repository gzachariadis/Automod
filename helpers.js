var regexes = require('./regexes');

var methods = {};

var methods = {

	jsonParser: function (stringValue, key) {

		var string = JSON.stringify(stringValue);
		var objectValue = JSON.parse(string);
		return objectValue[key];
	}
};

exports.data = methods;