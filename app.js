const request = require("postman-request");
const chalk = require("chalk");
const geocode = require("./utils/geocode");
const getForecast = require("./utils/forecast");

// City name
const name = process.argv[2];
if (!name) {
	return console.log("Please provide a city");
}
//Get the weather forecast
//Pass Geocode coordinates
// Callback chaining
geocode(name, (error, weather) => {
	if (error) {
		return console.log(error);
	}

	getForecast(weather.latitude, weather.longitude, (error, response) => {
		try {
			console.log(response);
		} catch {
			console.log(error);
		}
	});
});
