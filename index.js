// Question 1
let text = "extravaganza";
let text1 = text.substr(text.length-4, 4);
console.log(text1);

// Question 2
// Insert the following string at the fourth index of the below variable:
// "eat"
// const food = "The quick fox jumped over the lazy dog"
// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."brown"
// const story= "The quick brown fox jumps over the lazy dog"

const food = "The quick fox jumped over the lazy dog";
let food1 = "eat";
var position = 4;
var mysentence = food.slice(0, position) + "eat"+ food.slice(position);
console.log(mysentence);

const story = "The quick fox jumped over the lazy dog";
let count = (story.match(/the/g) || []).length;
console.log(count);
let count1 = (story.match(/brown/g) || []).length;
console.log(count1);

// Question 3
// Using JavaScript, find the following words from the following strings:
// 1. "are"
// const string1 = "The pupils are reading in the library";
// 2. "sitting"
// const string2 = "The child was sitting on the table before it fell"

const string1 = "The pupils are reading in the library";
console.log(string1.indexOf("are"));
const string2 = "The child was sitting on the table before it fell";
console.log(string2.indexOf("sitting"))


// Question 4
// Convert the following strings into the specified format:
// 1. UpperCase: "wonderful"
// 2. LowerCase: "amazing", "UndERneath"
// 3. Title case "A wonderful world"
const word1 = "wonderful";
console.log(word1.toUpperCase());

let  word2 = "amazing, UndERneath";
console.log(word2.toLowerCase());

let word3 = "A wonderful world";
word3=word3.split(" ").map(([firstChar,...rest])=>firstChar.toUpperCase()+rest.join("").toLowerCase()).join(" ");
console.log(word3); 