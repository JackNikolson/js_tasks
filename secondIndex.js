/* You are given two strings and you have to find an index of the second occurrence of the 
second string in the first one.

Example:
secondIndex("sims", "s") == 3
secondIndex("find the river", "e") == 12
secondIndex("hi", " ")  == undefined */



function secondIndex(text, symbol) {
	let arr = text.split("");
	let count = 0;
	for (var i = 0; i <= arr.length - 1; i++) {
		if (arr[i] == symbol) {
			count++;
			if (count == 2) {
				return i;
			}
		}
	}
}

console.log(secondIndex("Hello, Hugo", "H"));