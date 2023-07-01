function foo(name, population, treasury) {
    return {
        name,
        population,
        treasury,
    }
}
console.log(foo('Tortuga',
    7000,
    15000));
//
console.log("-------")
//
function city(name, population, treasury) {
   const result =  {
       name: name,
        population: population,
        treasury: treasury,
    };
    return result
}
console.log(city('Tortuga',
    7000,
    15000));