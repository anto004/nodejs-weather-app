const request = require("postman-request");
const chalk = require("chalk");

const url =
	"http://api.weatherstack.com/current?access_key=39b419873783dc6e947ba8d23487a6ed&query=Shillong";

request({ url: url, json: true }, function (error, response, body) {
	if (error) {
		console.log(error);
		return;
	}

	const data = response.body.current;
	const temp = data.temperature;
	const tempFeelLike = data.feelslike;
	const description = data.weather_descriptions.join(" ");
	console.log(
		`${chalk.grey("The weather today is ")} ${chalk.blue(
			temp + " deg C"
		)} ${chalk.grey("It feels like")} ${chalk.blue(tempFeelLike)}`
	);
	console.log(`${chalk.grey("It is ")} ${chalk.blue(description)}`);
});
