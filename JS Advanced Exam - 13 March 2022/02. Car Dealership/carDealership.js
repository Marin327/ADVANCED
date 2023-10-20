class CarDealership {
constructor(name) {
    this.name = name,
    this.availableCars = [];
    this.soldCars = [];
    this.totalIncome = 0;
}
addCar(model, horsepower, price, mileage) {
if(!this._validateModel(model)
 || !this._validateHorsepower(horsepower) 
 || !this._validatePriceAndMileage(price)
 || !this._validatePriceAndMileage(mileage)) {
    throw new TypeError("Invalid input!");
 }
this.availableCars.push( {
    model, 
    horsepower,
    price,
    mileage
});
return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
}

sellCar(model, desiredMileage) {
const index = this.availableCars.findIndex(c => c.model == model);
const match = this.availableCars[index];

if(match == undefined) {
    throw new ReferenceError(`${model} was not found!`);  
}
const mileageDelta = match.mileage - desiredMileage;
const sold = {
    model: match.model,
    horsepower: match.horsepower
}
if(mileageDelta <= 0) {
     sold.soldPrice = match.price;
} else if(mileageDelta <= 40000) {
    sold.soldPrice = match.price * 0.95; 
} else {
    sold.soldPrice = match.price * 0.9;
}
this.soldCars.push(sold);
this.availableCars.splice(index, 1);
this.totalIncome += sold.soldPrice;

return `${model} was sold for ${sold.soldPrice.toFixed(2)}$`

}
currentCar() {
    if(this.availableCars.length == 0) {
        return "There are no available cars";
    }

    const result = this.availableCars.map
    (c => `---${c.model} - ${c.horsepower} HP - ${c.mileage.toFixed(2)} km - ${c.price.toFixed(2)}$`);
result.unshift("-Available cars:");
return result.join("\n");
}

salesReport(criteria) {
if(criteria == "horsepower") {
this.soldCars.sort((a, b) => (b.horsepower) - (a.horsepower));
} else if(criteria == "model") {
this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
} else {
    throw new TypeError("Invalid criteria!");
}

const result  = this.soldCars.map(c => `---${c.model} - ${c.horsepower} HP - ${c.soldPrice.toFixed(2)}$`);
result.unshift(`-${this.soldCars.length} cars sold:`);
result.unshift(`-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$`);

 return result.join("\n");

}
_validateModel(value) {
return typeof value == 'string' && value != '';
}

_validateHorsepower(value) {
return Number.isInteger(value) && value >= 0;

}
_validatePriceAndMileage(value) {
return typeof value == 'number' && value >= 0;
}

}

let dealership = new CarDealership('SoftAuto');

dealership.addCar('Toyota Corolla', 100, 3500, 190000);

dealership.addCar('Mercedes C63', 300, 29000, 187000);

dealership.addCar('Audi A3', 120, 4900, 240000);

dealership.sellCar('Toyota Corolla', 230000);

dealership.sellCar('Mercedes C63', 110000);
console.log(dealership.salesReport('horsepower'));

//
console.log("------------");

//

// class CarDealership {
//     constructor(name) {
//         this.name = name;
//         this.availableCars = {};
//         this.soldCars = [];
//         this.totalIncome = 0;
//         this.soldCarsCount = 0;
//     };

//     addCar(model, horsepower, price, mileage) {
//         if (!(!!(model && typeof (model) === 'string' && model !== '')
//             && !!(horsepower && typeof (horsepower) === 'number', horsepower >= 0)
//             && !!(price && typeof (price) === 'number', price >= 0)
//             && !!(mileage && typeof (mileage) === 'number', mileage >= 0))) {
//             throw new Error('Invalid input!')
//         }

//         this.availableCars[model] = {horsepower, price, mileage};
//         return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`
//     };

//     sellCar(model, desiredMileage) {
//         if (!this.availableCars.hasOwnProperty(model)) {
//             throw new Error(`${model} was not found!`)
//         }

//         const carAvailable = this.availableCars[model];
//         const millageDifference = carAvailable.mileage - desiredMileage;
//         if (millageDifference > 40000) {
//             carAvailable.price *= 0.9;
//         } else if (0 < millageDifference && millageDifference <= 40000) {
//             carAvailable.price *= 0.95;
//         }

//         this.soldCars.push({model: model, horsepower: carAvailable.horsepower, price: carAvailable.price});
//         delete this.availableCars[model];
//         this.totalIncome += carAvailable.price;
//         this.soldCarsCount++;
//         return `${model} was sold for ${carAvailable.price.toFixed(2)}$`;
//     }

//     currentCar() {
//         if (Object.keys(this.availableCars).length ===0){
//             return 'There are no available cars';
//         }
//         return '-Available cars:\n' +
//             Object.entries(this.availableCars)
//                 .map(([model, value]) => `---${model} - ${value.horsepower} HP - ${value.mileage.toFixed(2)} km - ${value.price.toFixed(2)}$`)
//                 .join('\n');
//     }

//     salesReport(criteria) {
//         if (criteria !== 'horsepower' && criteria !== 'model') {
//             throw new Error('Invalid criteria!');
//         }

//         if (criteria === 'horsepower') {
//             this.soldCars.sort((a, b) => b.horsepower - a.horsepower);
//         } else {
//             this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
//         }

//         return `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n` +
//             `-${this.soldCarsCount} cars sold:\n` +
//             this.soldCars
//                 .map(c => `---${c.model} - ${c.horsepower} HP - ${c.price.toFixed(2)}$`)
//                 .join('\n');
//     }
// }
// let dealership = new CarDealership('SoftAuto');

// dealership.addCar('Toyota Corolla', 100, 3500, 190000);

// dealership.addCar('Mercedes C63', 300, 29000, 187000);

// dealership.addCar('Audi A3', 120, 4900, 240000);

// console.log(dealership.currentCar())