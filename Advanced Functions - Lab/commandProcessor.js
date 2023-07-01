function solution() {
    let status = '';

    function append(string) {
        status = status + string;
    }

    function removeStart(n) {
        status = status.slice(n);   
    }

    function removeEnd(n) {
        status = status.slice(0, -n);
    }

    function print() {
        console.log(status)
    }

    return {
        append,
        removeStart,
        removeEnd,
        print
    }
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

//
console.log("---------");

//
function foo() {
    let str = ""

    return {
        append: v => (str += v),
        removeStart: x => (str = str.slice(x)),
        removeEnd: x => (str = str.slice(0, -x)),
        print: () => console.log(str),
    }
}

//
console.log("--------");
//

function solve() {
    let string = '';

    function append(str) {
 string += str;
    }
    function removeStart(n) {
        string = string.slice(n);
    }
    function removeEnd(n) {
        string = string.slice(0, -n)
    }
    function print() {
        console.log(string);
    }
return {
    append,
    removeStart,
    removeEnd,
    print
  };
}
const myProc = createProcessor();
myProc.append("Hello");
myProc.print();