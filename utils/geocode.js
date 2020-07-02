const request = require("postman-request");

const geocode = (address, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=39b419873783dc6e947ba8d23487a6ed&query=${address}`;

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to locate weather api", undefined);
		} else if (response.body.error) {
			callback("Unable to find location " + address, undefined);
		} else {
			const location = response.body.location;
			const latitude = location.lat;
			const longitude = location.lon;
			const name = location.name;
			callback(undefined, {
				name,
				latitude,
				longitude,
			});
		}
	});
};

module.exports = geocode;
