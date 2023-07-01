const arr = [10, 20, 30, 40];

let accumulator = 0;

for(let element of arr) {
    accumulator +=  + element;
}
console.log(accumulator);