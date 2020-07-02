const request = require("postman-request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");
const getForecast = require("./utils/forecast");

geocode("Shillong", (error, weather) => {
	if (error) {
		console.log(error);
	} else {
		getForecast(weather.latitude, weather.longitude, (error, response) => {
			try {
				console.log(response);
			} catch {
				console.log(error);
			}
		});
	}
});
