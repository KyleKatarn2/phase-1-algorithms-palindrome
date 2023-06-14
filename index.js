/*
  Create an isPalindrome function with a string argument. 
  If the string is a palimdrome (read the same forward and backward) the function should return true.
  If not it should return false.
*/

function isPalindrome(word) {
  // Write your algorithm here
//  reverse the input string
  const reverse = word.split("").reverse().join("");
//    if the input equals the reverse string
  if (word === reverse) {
    return true;
  } else {
    return false;
  }
}

/* 
  reverse the input string
    if the input equals the reverse string
      return true
    else
      return false
*/

/*
  Add written explanation of your solution here
  Take the string argument and use split() make it into an array. Use
  reverse() to reverse the array and join() to create a string from the array.
  Compare word to reverse to see if it is a palindrome. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
}

module.exports = isPalindrome;
