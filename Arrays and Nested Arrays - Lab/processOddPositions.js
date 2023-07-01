function positions(arr) {
    return arr
        .filter((_, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse();
}

positions([10, 15, 20, 25])

//
console.log("----------")
//

function position(arr) {

    const filter = arr.filter((x, i) => i % 2 == 1);
    const doubled = filter.map(x => x * 2);
    const reversed = doubled.reverse();
    const result = reversed.join(" ");
    console.log(result);
}
position([10, 15, 20, 25])

//
console.log("------")
//


const solve = arr => arr
.filter((x, i) => i % 2 === 1 )
.map(x => x * 2)
.reverse()
.join(" ");

console.log(solve([10, 15, 20, 25]))