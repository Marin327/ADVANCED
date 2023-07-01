function subtract() {

    const firstInput = document.getElementById('firstNumber').value;
    const secondInput = document.getElementById('secondNumber').value;

    const resultDiv = document.getElementById('result');
    const finalResult = Number(firstInput) - Number(secondInput);
    resultDiv.textContent = finalResult;
}
//
console.log("---------")
//

function subtract() {
    const html = {
        firstV: document.getElementById("firstNumber"),
        secondV: document.getElementById("secondNumber"),
        result: document.getElementById("result"),
    }

    html.result.innerHTML =
        (Number(html.firstV.value) || 0) - (Number(html.secondV.value) || 0)
}