/*
You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.
For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).
Example:
digitsMultip(123405) == 120
digitsMultip(999) == 729
digitsMultip(1000) == 1
digitsMultip(1111) == 1
*/

function digitsMultip(data) {
	var composition = 1;
	var sData = data.toString();
  if (data != null) {
  	for (var i = 0; i <= sData.length - 1; i++) {
  		if (sData[i] == "0") {
  			continue;
  		} else {
	  		composition = composition*sData[i];
  		}
  	}
  	return composition;
  }
}



