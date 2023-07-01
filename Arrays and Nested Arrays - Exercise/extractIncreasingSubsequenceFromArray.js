function foo(arr) {
    return arr.reduce((a, v) => {
        if (v >= (a[a.length - 1] || arr[0])) {
            a.push(v)
        }
        return a
    }, [])
}
foo([1, 2, 3, 4])

//
console.log("-----")
//

function solve(numbers) {

    let biggestNumber = numbers.shift();
    const finalResult = [biggestNumber];
    for (const number of numbers) {
        if (number >= biggestNumber) {
            biggestNumber = number;
            finalResult.push(number);
        }
    }
    return finalResult;
    //console.log(finalResult);
}
solve([1, 2, 3, 4])