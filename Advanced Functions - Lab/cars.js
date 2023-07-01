function solve(input) {
    function cars() {
        const state = {};

        function create(name, inherit, parentName) {
            const obj = {};
            state[name] = obj;
            if (inherit) {
                Object.setPrototypeOf(obj, state[parentName])
            }
        }

        function set(name, propName, value) {
            state[name][propName] = value;
        }

        function print(name) {
            const obj = state[name];
            const props = getAllProperties(obj);
            console.log(props
                .map(e => `${e[0]}:${e[1]}`)
                .join(',')
            );
        }

        function getAllProperties(obj) {
            let props = Object.entries(obj)
            getParentProps(obj);
            return props;

            function getParentProps(obj) {
                const prototype = Object.getPrototypeOf(obj);
                if (Object.getPrototypeOf(prototype)) {
                    let parentProps = Object.entries(prototype);
                    props = props.concat(parentProps);
                    getParentProps(prototype);
                }
            }
        }

        return {
            create,
            set,
            print
        }
    }

    let carsProcessor = cars();

    input.forEach(element => {
        let tokens = element.split(' ');
        carsProcessor[tokens.splice(0, 1)](...tokens);
    });
}
solve(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']);

//
console.log("--------");

//

function foo(input) {
    const data = {}

    const instr = {
        create: (n, inherits, n2) =>
            (data[n] = inherits ? Object.create(data[n2]) : {}),
        set: (n, k, v) => (data[n][k] = v),
        print: n => {
            const entry = []
            for (const key in data[n]) {
                entry.push(`${key}:${data[n][key]}`)
            }
            console.log(entry.join(", "))
        },
    }

    input.forEach(x => {
        const [c, n, k, v] = x.split(" ")

        instr[c](n, k, v)
    })
}

// 100/100 with prototype traversal and Object.entries. For fun.

// function foo(input) {
//     const data = {}
//     const getAllProps = obj => {
//         const p = {}
//         for (
//             ;
//             !obj.hasOwnProperty("constructor");
//             obj = Object.getPrototypeOf(obj)
//         ) {
//             let op =
//                 Object.getOwnPropertyNames(obj) !== -1
//                     ? Object.getOwnPropertyNames(obj)
//                     : 0
//             for (let i = 0; i < op.length; i++) p[op[i]] = obj[op[i]]
//         }
//         return p
//     }
//
//     const instr = {
//         create: (n, inherits, n2) =>
//             (data[n] = inherits ? Object.create(data[n2]) : {}),
//         set: (n, k, v) => (data[n][k] = v),
//         print: n => {
//             console.log(
//                 Object.entries(getAllProps(data[n]))
//                     .map(x => `${x[0]}:${x[1]}`)
//                     .join(", ")
//             )
//         },
//     }
//
//     input.forEach(x => {
//         const [c, n, k, v] = x.split(" ")
//
//         instr[c](n, k, v)
//     })
// }
foo(['create pesho','create gosho inherit pesho','create stamat inherit gosho','set pesho rank number1','set gosho nick goshko','print stamat']);