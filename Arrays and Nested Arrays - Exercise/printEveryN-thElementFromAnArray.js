function foo(arr, s) {
    const result = [];

    for (let i = 0; i < arr.length; i += s) {
        result.push(arr[i]);
    }
return result
}
foo(['5',
'20',
'31',
'4',
'20'],
2)
//
console.log("------")
//
function solve(arr, step) {
    return arr.filter((ele, index) => { 
        if( index % step == 0 ) {
            return ele;
        }
});
}
console.log(solve(['5',
'20',
'31',
'4',
'20'],
2))