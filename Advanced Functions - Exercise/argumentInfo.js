function solve(...args) {
    const argTypes = {}
    args.forEach(arg => {
        const argType = typeof (arg);
        console.log(`${argType}: ${arg}`);
        if (!argTypes.hasOwnProperty(argType)) {
            argTypes[argType] = 0;
        }
        argTypes[argType]++;
    })

   console.log(Object.entries(argTypes)
       .sort((a, b) => b[1] - a[1])
       .map(e =>e.join(' = '))
       .join('\n'));
}
solve('cat', 42, function () { console.log('Hello world!'); });
console.log('--------------------------');
solve({ name: 'bob'}, 3.333, 9.999);

//

console.log("-----------");
//

function foo(...args) {
    const count = {}
    const result = args.map(x => {
        count[typeof x] = (count[typeof x] || 0) + 1
        return `${typeof x}: ${x}`
    })

    result.forEach(x => console.log(x))
    Object.entries(count).sort((x,y) => y[1] - x[1]).map(([type, counts]) =>
        console.log(`${type} = ${counts}`)
    )
}
foo('cat', 42, function () { console.log('Hello world!'); });
console.log('--------------------------');
foo({ name: 'bob'}, 3.333, 9.999);
//
console.log("-----------");

//

function solve() {
    const arg = Array.from(arguments);
    const count = new Map();
    arg.forEach((element) => {
        const type = typeof element;
        console.log(`${type}: ${element}`);
        if(!count.has(type)) {
            count.set(type, 0)
        }
        count.set(type, count.get(type) + 1)
    });
Array.from(count.entries())
.sort((a,b) => b[1] - a[1])
.forEach((element) => console.log(`${element[0]} = ${element[1]}`));
}
solve('cat', 42, function () {
     console.log('Hello world!'); });

