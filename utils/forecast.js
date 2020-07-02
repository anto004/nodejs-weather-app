const request = require("postman-request");
const chalk = require("chalk");

function getForecast(latitude, longitude, callback) {
	const url = `http://api.weatherstack.com/current?access_key=39b419873783dc6e947ba8d23487a6ed&query=${latitude},${longitude}`;

	request({ url: url, json: true }, (error, response) => {
		if (error) {
			callback("Unable to connect to weather service", undefined);
		} else if (response.body.error) {
			callback("Unable to find location", undefined);
		} else {
			const data = response.body.current;
			const temp = data.temperature;
			const tempFeelLike = data.feelslike;
			const description = data.weather_descriptions.join(" ");
			const resp = `${chalk.grey("The weather today is ")} ${chalk.blue(
				temp + " deg C"
			)} ${chalk.grey("It feels like")} ${chalk.blue(
				tempFeelLike + " degrees"
			)}\n${chalk.grey("It is ")} ${chalk.blue(description)}`;

			callback(undefined, resp);
		}
	});
}

module.exports = getForecast;
