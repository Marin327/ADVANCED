function calculator() {
   let sumElement1;
   let sumElement2;
   let resultElement;

   return {
    init: (selector1, selector2, resultSelector) => {
        sumElement1 = document.querySelector(selector1);
        sumElement2 = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
     },
     add: () => (resultElement.value = +sumElement1.value + +sumElement2.value),
     subtract : () =>
     (resultElement.value = +sumElement1.value - +sumElement2.value),
   };
}
const calculate = calculator ();
calculate.init('#num1', '#num2', '#result');
//
console.log("-------");
//

function calculator() {
    const html = { s1: "", s2: "", output: "" }

    function calc(a, b, sign) {
        const signs = { "+": (a, b) => a + b, "-": (a, b) => a - b }

        return signs[sign](Number(a), Number(b))
    }

    return {
        init: (a, b, c) => {
            html.s1 = document.querySelector(a)
            html.s2 = document.querySelector(b)
            html.output = document.querySelector(c)
        },
        add: () =>
            (html.output.value = calc(html.s1.value, html.s2.value, "+")),
        subtract: () =>
            (html.output.value = calc(html.s1.value, html.s2.value, "-")),
    }
}

//
console.log("---------");
//
function calculator() {
    let element1;
    let element2;
    let resultElement;

    function init(selector1, selector2, resultSelector) {
        element1 = document.querySelector(selector1);
        element2 = document.querySelector(selector2);
        resultElement = document.querySelector(resultSelector);
    }

    function add() {
        resultElement.value = Number(element1.value) + Number(element2.value);
    }

    function subtract() {
        resultElement.value = Number(element1.value) - Number(element2.value);
    }

    return {
        init, add, subtract
    };
}


