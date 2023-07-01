function getFibonator(){
    let prevNumber = 0;
    let currentNumber = 1;

    function fib(){
        let next = prevNumber + currentNumber;
        prevNumber = currentNumber;
        currentNumber = next;
        return prevNumber;
    }
    return fib;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
//
console.log("-------------");
//
function getFibonator() {
    let nums = [0, 0]

    return () => {
        const result = nums[0] + nums[1]
        nums = [nums[1], nums[1] + nums[0] || 1]
        return result || 1
    }
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13
//
console.log("---------");
//
function getFibonator() {

let num  = 1;
let previous = 0;

function fib() {
    let fibNumber = num + previous;
    num = previous;
    previous = fibNumber;
    return fibNumber
}
return fib;
}
let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

