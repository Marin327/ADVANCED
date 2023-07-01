function foo(arr) {
    let i = arr.length - 1
    return arr
        .sort((a, b) => a - b)
        .reduce((a, v, _, tArr) => {
            a.push(v)
            a.push(tArr[i--])
            return a
        }, [])
        .slice(0, arr.length)
}
foo([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])

//
console.log("-------")
//

function solve(arr) {
let resArray = [];
   arr = arr.sort((a, b) => a - b);
   while(arr.length !== 0) {
    resArray.push(arr.shift());
    resArray.push(arr.pop());
   }
return resArray;
}
solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])