// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2


function count(sentence){
    const lowerSentense = sentence.toLowerCase();
    const vowel = lowerSentense.match(/[aeiou]/g);
    return vowel ? vowel.length : 0;
    
}
const input = "Hello World";
const vowelCount = count(input);
console.log(vowelCount);