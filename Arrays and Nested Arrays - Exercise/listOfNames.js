

function solve(input) {
input
.sort((a, b) => a.localeCompare(b))
.forEach((ele, i) => {
    console.log(`${i + 1}.${ele}`);
    }); 
}
solve(["John",
"Bob",
"Christina",
"Ema"])