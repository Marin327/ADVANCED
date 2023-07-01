function pop(townsAsStrings) {
    //init result collection
    const result = {};

    //parse input
    for (let line of townsAsStrings) {
        const tokens = line.split(' <-> ');
        const name = tokens[0];
        const population = Number(tokens[1]);

        // check if key exists and store input in collection
        if (name in result) {
            result[name] += population;
        } else {
            result[name] = population;
        }
        
    }
    //print result
    for (let name in result) {
        console.log(`${name} : ${result[name]}`);
    }
}
pop(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
//
console.log("--------");

//
function foo(arr) {
    const parsedData = arr.reduce((a, b) => {
        const [name, population] = b.split(" <-> ")
        a[name] = (a[name] || 0) + Number(population)
        return a
    }, {})

    return Object.entries(parsedData)
        .map(x => `${x[0]} : ${x[1]}`)
        .join("\n")
}
console.log(foo(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']));