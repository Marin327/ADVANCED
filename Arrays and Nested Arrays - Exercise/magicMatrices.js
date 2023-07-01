function foo(arr) {
    return [
        ...arr.map(x => x.reduce((a, v) => a + v, 0)),
        ...arr.reduce((a, v, i) => {
            a.push(arr.reduce((c, d) => c + d[i], 0))
            return a
        }, []),
    ].every((x, _, arr) => x === arr[0])
}
foo([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

//

console.log("-------");
//
function solve(arr) {

    let sumRows = 0;
    let sumCols = 0;

    for (let i = 0; i < arr.length; i++) {
        let currentArray = arr[i].join("");
        for (let j = 0; j < currentArray.length; j++) {
            sumRows += Number(currentArray[j]);
            sumCols += Number(currentArray[0]);
        }
    }
    if (sumRows === sumCols) {
        console.log('true');
    } else {
        console.log('false');
    }
}
solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
])