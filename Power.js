// Question 3: Power of Two
// Write a program that takes an integer as input and returns true if the input is a power of two.
// Examples: 
// 8=> returns true
// 6=> returns false


function isPowerOfTwo(num){
    if (num <=0){
        return false;
    }
    return (num & (num - 1)) === 0;
}

const inputNum = 8;
const result = isPowerOfTwo(inputNum);

console.log(`is ${inputNum} a power of two? ${result}`);