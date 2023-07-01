function same(number) {

    let num = number.toString();
    let sum = 0;
    let isSame = true;
    let letter = num[0];
  
    for(let i = 0; i < num.length; i++) {
        if(letter !== num[i]) {
            isSame = false;
        }
        sum += Number(num[i]);
    }
    console.log(isSame);
    console.log(sum);
}
same(1234);

//
console.log("-----")
//

function sameIs(number) {

let arr = String(number).split('').map(n => Number(n));
let isSame = arr.filter(n => n !== arr[0]).length ? false: true;
let sum = arr.reduce((acc, num) => acc + num);

//console.log(arr);
console.log(isSame);
console.log(sum);
}
sameIs(1234)