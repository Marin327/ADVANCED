function foo(arr) {
    return arr
        .sort((a, b) =>
            a.length - b.length === 0
                ? a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase())
                : a.length - b.length
        )
        .join("\n")
}
foo(['alpha',
'beta','gamma'])
//

console.log("-------");
//

function solve(input) {
 
    input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(input.join("\n"));
}
solve(['alpha',
'beta','gamma'])