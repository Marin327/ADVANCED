function foo(arr, n) {
    for (let i = 0; i < n; i++) {
        arr.unshift(arr.pop())
    }

    return arr.join(" ")
}
foo(['1',
        '2',
        '3',
        '4'
    ],
    2)
//
console.log("------")
//

function solve(arr, num) {
    for (let i = 0; i < num; i++) {
        arr.unshift(arr.pop());
    }
    console.log(arr.join(" "))
}
solve(['1',
        '2',
        '3',
        '4'
    ],
    2)