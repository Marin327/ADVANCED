function math(a, b, operator) {

    let result;
    switch (operator) {
        case '+':
            a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '/':
            result = a / b;
            break;
        case '*':
            result = a * b;
            break;
        case '%':
            result = a % b;
            break;
        case '**':
            result = a ** b;
            break;
    }

    console.log(result);
}
math(5, 6, '+');


console.log("-----------")

function math(a, b, operator) {
    console.log(eval(`${a}${operator}${b}`));
}

math(5, 6, "+");

console.log("-------")

function calc(x, y, a) {
    const operators = {
        "+": (x, y) => x + y,
        "-": (x, y) => x - y,
        "*": (x, y) => x * y,
        "/": (x, y) => x / y,
        "%": (x, y) => x % y,
        "**": (x, y) => x ** y,
    }

    return operators[a](x, y)
}
math(5,6 "+")