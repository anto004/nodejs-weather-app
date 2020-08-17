const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=39b419873783dc6e947ba8d23487a6ed&query=40.33,-23.34`;

const request = http.request(url, (response) => {
	let data = "";

	response.on("data", (chunk) => {
		data += chunk.toString();
	});

	response.on("end", () => {
		const body = JSON.parse(data);
		console.log(body);
	});
});

request.on("error", (error) => {
	console.log("An error", error);
});

request.end();
