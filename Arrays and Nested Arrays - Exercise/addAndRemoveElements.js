function foo(arr) {
    let count = 1
    const temp = []
    const actions = {
        add: x => temp.push(x),
        remove: () => temp.pop(),
    }

    arr.forEach(x => actions[x](count++))
    return temp.length !== 0 ? temp.join("\n") : "Empty"
}
foo(['add',
    'add',
    'add',
    'add'
])

//
console.log("-------")
//

function solve(arr) {

    const newArr = [];
    let counter = 1;

    for (let i = 0; i < arr.length; i++) {
        const command = arr[i];
        if (command == 'add') {
            newArr.push(counter++);
        } else if (command === 'remove') {
            newArr.pop(counter++);
        }
    }
    if (!newArr.length) {
        console.log('Empty');
    } else {
        console.log(newArr.join("\n"));
    }
}
solve(['add',
    'add',
    'add',
    'add'
])