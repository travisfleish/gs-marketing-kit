const getRandomPlayerNumber = (minVal, maxVal, exclude) => {
	let newNumber;
	while (true) {
		newNumber = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal;
		if (newNumber !== exclude) {
			break;
		}
	}
	return newNumber;
};

export default getRandomPlayerNumber;
