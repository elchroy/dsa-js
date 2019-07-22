module.exports = {
	binarySearch (sortedList, item) {
		let max = sortedList.length - 1
		let min = 0
		let guess;

		while (min <= max) {
			guess = Math.floor((max + min) /2);

			if (sortedList[guess] === item) {
				return guess;
			} else if (sortedList[guess] < item) {
				min = guess + 1
			} else {
				max = guess - 1
			}
		}

		return -1;
	}
}