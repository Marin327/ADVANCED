function foo(arr) {
    let count = 0
    arr.forEach(x =>
        x.reduce((a, v) => {
            if (a === v) {
                count += 1
            }
            return v
        })
    )

    for (let i = 0; i < arr.length - 1; i++) {
        arr[i].forEach((_, j) => {
            if (arr[i][j] === arr[i + 1][j]) {
                count += 1
            }
        })
    }
    return count
}
foo([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]);

foo([['test', 'yes', 'yo', 'ho'], 
['well', 'done', 'yo', '6'], 
['not', 'done', 'yet', '5']]);