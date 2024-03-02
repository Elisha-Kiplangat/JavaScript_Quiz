// Question 6: Count Vowels
// Write a program that counts the number of vowels in a sentence.
// eg " Hello World " => returns 2


function count(sentence){
    const lowerSentense = sentence.toLowerCase();
    const vowels = new Set();
    for (const vowel of lowerSentense){
        if ('aeiou'.includes(vowel)){
            vowels.add(vowel);
        }
    }
    return vowels.size;
    
}
const input1 = "Hello World";
const vowelCount = count(input1);
console.log(vowelCount);