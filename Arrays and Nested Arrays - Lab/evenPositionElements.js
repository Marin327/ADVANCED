function even(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            result += arr[i] + ' ';
        }
    }
    console.log(result);
}
even(['20', '30', '40',
    '50', '60'
]);
even(['5', '10'])