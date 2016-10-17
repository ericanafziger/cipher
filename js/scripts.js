$(document).ready(function() {
var sentence = prompt("Enter your sentence to be coded here:");

var firstLetter = sentence.charAt(0);
var lastLetter = sentence.charAt((sentence.length)-1);
var fl=firstLetter.toUpperCase()+lastLetter.toUpperCase();
function reverse (input) {
  return input.split("").reverse().join("");
}
function countLetters (input) {
  return sentence.charAt((Math.floor(sentence.length / 2)));
}
alert(reverse(countLetters(sentence)+ sentence+reverse(fl)));
});
