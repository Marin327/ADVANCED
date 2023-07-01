class Hex {
    constructor(value) {
        this.value = value;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        return `0x${this.value.toString(16).toLocaleUpperCase()}`
    }
    plus(num) {
        return new Hex(this.value + num);
    }
    minus(num) {
        return new Hex(this.value - num);
    }
    parse(num) {
        return parseInt(num, 16);
    }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'))
//
console.log("---------");
//

class Hex {
    constructor(value) {
        this.value = value;
    }

    valueOf(){
        return this.value;
    }

    toString(){
        return '0x' + this.value.toString(16).toUpperCase();
    }


    plus(inputNumber){
        let number ;
        if (inputNumber instanceof Hex){
            number = this.value + inputNumber.valueOf();
        } else {
            number = this.value + inputNumber;
        }

        return new Hex(number);
    }

    minus(inputNumber){
        let number ;
        if (inputNumber instanceof Hex){
            number = this.value - inputNumber.valueOf();
        } else {
            number = this.value - inputNumber;
        }

        return new Hex(number);
    }

   parse(numberString){
       return Number.parseInt(numberString, 16);
   }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'))
//
console.log("-------");
//
class Hex {
	#value
	constructor (n) {
		this.#value = n
	}
	valueOf () { return this.#value }
	plus (number) {
		let result = this.#value + Number(number.valueOf())

		return new Hex(result)
	}
	minus (number) {
		let result = this.#value - Number(number.valueOf())

		return new Hex(result)
	}
	toString () {
		return `0x${(this.#value.toString(16)).toUpperCase()}`
	}

	parse (text) {
		return parseInt(text, 16)
	}
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');
console.log(FF.parse('AAA'))