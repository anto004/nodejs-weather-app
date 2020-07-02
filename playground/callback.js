const recipe = (ingredients, callback) => {
	const food = {
		cook: ingredients,
	};

	callback(food);
};

recipe("rice", (response) => {
	console.log(response);
});
