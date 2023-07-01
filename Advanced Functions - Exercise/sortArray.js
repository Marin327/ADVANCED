const solve = (arr, order) => arr.sort((a, b) => order === 'asc' ? a - b : b - a)

console.log(solve([14, 7, 17, 6, 8], 'asc'));
console.log(solve([14, 7, 17, 6, 8], 'desc'))
//
console.log("--------");
//
function foo(arr, a) {
    return a === "asc" ? arr.sort((x, y) => x - y) : arr.sort((x, y) => y - x);
}

//
console.log("--------");

//

function solve(data, type) {
    return type === "asc"
     ? data.sort((a, b) =? a - b) 
     : data.sort((a, b) => b - a);
}
console.log(solve([14, 7, 17, 6, 8], 'asc'))