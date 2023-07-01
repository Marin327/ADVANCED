function cityTaxes(name, population, treasury) {
    const result = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.taxRate * this.population;
        },
        applyGrowth(percentage) {
      this.population += Math.floor(this.population * percentage / 100);
        },
        applyRecession(percentage) {
            this.treasury -= Math.ceil(this.treasury * percentage / 100);
        },
    };
    return result;
}
const city = cityTaxes('Tortuga', 7000, 15000);

city.collectTaxes();
console.log(city.treasury);

city.applyGrowth(5);
console.log(city.population);

city.applyRecession(15);
console.log(city.treasury);

//
console.log("--------");
//
function foo(n, p, t) {
    class City {
        constructor(n, p, t) {
            this.name = n
            this.population = p
            this.treasury = t
            this.taxRate = 10
        }

        collectTaxes = () => Math.round((this.treasury += this.population * this.taxRate))
        applyGrowth = p => Math.round((this.population += (this.population * p) / 100))
        applyRecession = p => Math.round((this.treasury -= (this.treasury * p) / 100))
    }

    return new City(n, p, t)
}
const City = foo('Tortuga', 7000, 15000);