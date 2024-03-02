// Question 4: Capitalize Words
// Write a program that accepts a string as input, capitalizes the first letter of each word in the 
// string, and then returns the result string.
// Examples: 
// "hi"=> returns "Hi"
// "i love programming"=> returns "I Love Programming"


function capitalize(input){
    const words = input.split(' ');
    const capitalize = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const other = word.slice(1).toLowerCase();
        return firstLetter + other;
    });

    const result = capitalize.join(' ');
    return result;
}

const input = "hi, i love programming";
const capitalized = capitalize(input);
console.log(capitalized);