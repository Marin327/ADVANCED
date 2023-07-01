function cooking(...params) {

    let number = Number(params[0]);
    for (const command of params) {
        switch (command) {
            case 'chop':
                number /= 2;
                console.log(number);
                break;
            case 'dice':
                number = Math.sqrt(number);
                console.log(number);
                break;
            case 'spice':
                number += 1;
                console.log(number);
                break;
            case 'bake':
                number *= 3;
                console.log(number);
                break;
            case 'fillet':
                number = number - number * 0.2;
                console.log(number);
                break;
        }
    }
}
cooking('32', 'chop', 'chop', 'chop', 'chop', 'chop')

//
console.log("--------")
//
function cookingInTime(...data) {
 num = Number(data.shift());

 const funcShelft = {
    chop() { num /= 2 },
    dice() { num = Math.sqrt(num); },
    slice() { num += 1; },
    bake() { num *= 3; },
    fillet() { num -= num * 0.2; },
 }

data.forEach(command => { funcShelft[command](data), console.log(num) });

}
cookingInTime('32', 'chop', 'chop', 'chop', 'chop', 'chop')

//
console.log("-----")
//
function cookingTImeIs(num, ...actions) {

num = Number(num);
const operations = {
    'chop': (num) => num / 2,
    'dice': (num) => Math.sqrt(num),
    'spice': (num) => ++num,
    'bake': (num) => num * 3,
    'fillet': num => num * 0.8
}
for(let action of actions) {
    num = operations[action](num);
    console.log(num);
}

}
cookingTImeIs('32', 'chop', 'chop', 'chop', 'chop', 'chop')
