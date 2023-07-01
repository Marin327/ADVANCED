class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    
    }
    increase(num) {
        this.innerLength += num;
    }
    decrease(num) {
        if(this.innerLength - num < 0) {
            this.innerLength = 0;
        } else {
            this.innerLength = num;
        }
    }
    toString() {
        if(this.innerString.length > this.innerLength) {
            return `${this.innerString.substring(0, this.innerLength)}...`;
        } else {
            return this.innerString;
        }
      }
    }
    let test = new Stringer("Test", 5);

    console.log(test.toString()); // Test
    
    test.decrease(3);
    
    console.log(test.toString()); // Te...
    
    test.decrease(5);
    
    console.log(test.toString()); // ...
    
    test.increase(4);
    
    console.log(test.toString()); // Test
    //
    console.log("------------");
    //

    class Stringer{

        constructor(str, length) {
            this.innerString  = str;
            this.innerLength = length;
        }
    
        increase(length) {
            this.innerLength += length;
        }
    
        decrease(length){
            this.innerLength -= length;
            if (this.innerLength < 0) this.innerLength = 0;
        }
    
        toString(){
            if (this.innerLength >= this.innerString.length){
                return this.innerString;
            }
            return `${this.innerString.substring(0,this.innerLength)}...`;
        }
    
    }
    let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test
//
console.log("---------------")
//
    class Stringer {
    constructor (s, l) {
        this.innerString = s
        this.innerLength = l
    }

    increase (v) {
        this.innerLength += v
    }
    decrease (v) {
        const result = this.innerLength - v
        this.innerLength = result < 0 ? 0 : result
    }

    toString () {
        if (this.innerLength === 0) return '...'

        if (this.innerString.length > this.innerLength) {
            return `${this.innerString.slice(0, this.innerLength)}...`
        }

        return this.innerString
    }
}
let test = new Stringer("Test", 5);

console.log(test.toString()); // Test

test.decrease(3);

console.log(test.toString()); // Te...

test.decrease(5);

console.log(test.toString()); // ...

test.increase(4);

console.log(test.toString()); // Test