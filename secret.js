/*
You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.
For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".

Example:
findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
findMessage("hello world!") == ""
*/

function findMessage(data) {
	var arr = data.split("");
	var msg = "";
	var letters = new RegExp(/^[A-Za-z]+$/); //checking that character is letter
  arr.forEach(function(char) {
  	if (char == char.toUpperCase() && letters.test(char) == true) {
  		msg += char;
  	};
  })
  return msg;
}

