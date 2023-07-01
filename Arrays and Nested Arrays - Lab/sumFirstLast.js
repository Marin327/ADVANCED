function sum(arr) {

    const first = Number(arr);
        const last = Number(arr[arr.length - 1]);
        return first + last;
    }
    //
    console.log("----------");
    //
    function sum(arr) {
        return Number(arr.pop()) + Number(arr.shift());
    }

    //
    console.log("---------")
    //
    function sum(arr) {
        arr = arr.map(Number);
        return arr[0] + arr[arr.length - 1];
    }
    
sum(['20', '30', '40'])
sum(['5', '10'])