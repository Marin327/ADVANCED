function negativeAndPositive(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    console.log(result.join("\n"));
}

negativeAndPositive([7, -2, 8, 9])
negativeAndPositive([3, -2, 0, -1])

//
console.log("-------");
//
function negativeAndPositive(arr) {
    return arr.reduce((a, v) => {
        v < 0 ? a.unshift(v) : a.push(v)
        return a
    }, [])
}
negativeAndPositive([7, -2, 8, 9])