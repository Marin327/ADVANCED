function add(acc) {
    function sum(a) {
        acc += a;
        return sum;
    }

    sum.toString = function () {
        return acc.toString();
    }

    return sum;
}

console.log(add(1)(6)(-3).toString());
//
console.log("---------");

//

function foo(n) {
    let temp = 0

    function recursive(x) {
        temp += x

        return recursive
    }
    recursive.toString = () => temp
    return recursive(n)
}