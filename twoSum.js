/* Write a function that takes an array of numbers (integers for the tests) and a target number. 
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple like so: (index1, index2).

Examples: 
Test.assertSimilar(twoSum([1,2,3], 4).sort(numericalCompare), [0,2]);
Test.assertSimilar(twoSum([1234,5678,9012], 14690).sort(numericalCompare), [1,2]);
Test.assertSimilar(twoSum([2,2,3], 4).sort(numericalCompare), [0,1]); */



function twoSum(numbers,target) {
	for (var i = 0; i <= numbers.length-1; i++) {
		try {
			if (numbers[i] + numbers[i+1] == target) {
				return [i,i+1];
			}	else if (numbers[i] + numbers[i+2] == target) {
				return [i,i+2];
			}
		} catch(err){};
	}
}

console.log(twoSum([2,1,2], 4));