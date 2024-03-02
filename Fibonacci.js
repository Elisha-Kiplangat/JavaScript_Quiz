// Question 2: Fibonacci Sequence
// Write a program to generate the Fibonacci sequence up to 100.


function fibonacci(x){
    let y = 0;
    let z = 1;
    let next;
    console.log("Fibonacci series");

    for (let i = 1; i <= x; i++){
        console.log(y);
        next = y + z;
        y = z;
        z = next;
    }
}
fibonacci(100);
