function solve(input) {
    const juices = {};
    const bottles = {};
    for (const line of input) {
        const [juice, quantity] = line.split(" => ");
        let current = {};

        //const currentQuantity = Number(quantity);

        if (
            !Object.values(juices)
            .map((x) => x.juice)
            .includes(juice)
        ) {
            current = {
                juice,
                quantity: Number(quantity),
            }
            juices[juice] = current;
        } else {
            current = juices[juice];
            current.quantity += Number(quantity);
        }

        let currentBottles = 0;

        while (current.quantity >= 1000) {
            currentBottles++;
            current.quantity -= 1000;
        }
        if (
            !Object.values(bottles)
            .map((x) => x.juice)
            .includes(juice) &&
            currentBottles !== 0
        ) {
            current = {
                juice,
                bottles: currentBottles
            };
            bottles[juice] = current;
        } else if (Object.values(bottles)
            .map((x) => x.juice)
            .includes(juice)
        ) {
            current = bottles[juice];
            current.bottles += currentBottles;
        }
    }
    for (const juice of Object.entries(bottles)) {
        console.log(`${juice[0]} => ${juice[1].bottles}`)
    }
}
solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])
//
console.log("------------");
//
function solve1(input) {
    const bottles = new Map();
    const quantities = {};

    for (const record of input) {
        const [juice, quantity] = record.split(' => ')
        if (!quantities.hasOwnProperty(juice)) {
            quantities[juice] = 0;
        }
        quantities[juice] += Number(quantity);

        const bottlesQt = Math.floor(quantities[juice] / 1000);
        if (bottlesQt) {
            quantities[juice] = quantities[juice] % 1000;
            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }
            bottles.set(juice, bottles.get(juice) + bottlesQt);
        }
    }

    for (const juice of bottles.entries()) {
        console.log(`${juice[0]} => ${juice[1]}`);
    }
}
solve1(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])
//
console.log("---------");
//
function foo(arr) {
    const juices = {}
    const bottles = {}

    const addBottles = (n, q) => {
        const btlToAdd = (q - (q % 1000)) / 1000

        if (btlToAdd > 0) {
            bottles[n] = (bottles[n] || 0) + btlToAdd
            return q % 1000
        }

        return q
    }

    arr.forEach(x => {
        const [name, quantity] = x.split(' => ')
        juices[name] = juices[name] || 0

        juices[name] = addBottles(name, juices[name] + Number(quantity))

    })

    return Object.entries(bottles)
        .map(([name, quantity]) => `${name} => ${quantity}`)
        .join('\n')
}
foo(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])