function fruit(money, weight, fruit) {

    const kg = weight / 1000;
    console.log(`I need $${(kg * fruit).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${money}.`);
}
fruit('apple', 1563, 2.35)
//
console.log("--------")


//
function fruitToOne(money, weight, fruit) {

    const kg = weight / 1000;

    console.log(`I need $${(kg * fruit).toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${money}.`);

}
fruitToOne('apple', 1563, 2.35)