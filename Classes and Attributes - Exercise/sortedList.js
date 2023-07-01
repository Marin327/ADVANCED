class List {
    constructor() {
        this.arr = [];
        this.size = this.arr.length;
    }

    // #sortArray(arr) {
    //     return arr.sort((a, b) => a - b);
    // }
    // #arrayLength(arr) {
    //     return arr.length;
    // }
    // #isIndexValid(index, arr) {
    //     return index >= 0 && index < arr.length
    // }
    // #throwError() {
    //     throw new Error("Invalid index!");
    // }

    add(element) {
        this.arr.push(element);
        this.arr = this.arr.sort((a, b) => a - b);
        this.size = this.arr.length;
    }

    remove(index) {
        if (index >= 0 && index < this.arr.length) {
            this.arr.splice(index, 1);
            this.arr = this.arr.sort((a, b) => a - b);
        this.size = this.arr.length;
        } else {
           throw new Error("Invalid index!");
        }
    }

    get(index) {
        if (index >= 0 && index < this.arr.length) {
            return this.arr[index];
        }
        throw new Error("Invalid index!");
    }

    size() {
        return this.arr.length;
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1))
list.remove(1);
console.log(list.get(1));

//
console.log("----------");
//

class List {
    constructor () {
        this.list = []
        this.size = this.list.length
    }

    updateSize = () => this.size = this.list.length
    orderList = () => this.list.sort((a, b) => a - b)

    add (e) {
        this.list.push(e)
        this.updateSize()
        this.orderList()
    }
    remove (i) {
        if (this.list[i] !== undefined) {
            this.list.splice(i, 1)
            this.updateSize()
            this.orderList()
        }
    }
    get (i) {
        if (this.list[i] !== undefined) {
            this.updateSize()
            this.orderList()
            return this.list[i]
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1))
list.remove(1);
console.log(list.get(1));
