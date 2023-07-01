function solve() {
    const firstOptElement = document.createElement("option");
    const secondOptElement = document.createElement("option");
    firstOptElement.value = "binary";
    secondOptElement.value = "hexadecimal";
    firstOptElement.innerHTML = "Binary";
    secondOptElement.innerHTML = "Hexadecimal";

    const menuToElement = document.getElementById("selectMenuTo");
    menuToElement.appendChild(firstOptElement);
    menuToElement.appendChild(secondOptElement);

    const button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", function () {
        const numberInput = document.getElementById("input");

        const outputResult = document.getElementById("result");

        if(menuToElement.value === 'binary') {
            outputResult.value = Number(numberInput.value).toString(2);
        } else if(menuToElement.value === "hexadecimal") {
            outputResult.value = Number(numberInput.value).toString(16).toUpperCase();
        }
    });

}

//
console.log("---------");

//

function solve() {
    const html = {
        numberField: document.getElementById("input"),
        convertTo: document.getElementById("selectMenuTo"),
        output: document.getElementById("result"),
        button: document.querySelector("#container > button"),
    }
    const makeOptions = arr =>
        arr.map(x => {
            const option = document.createElement("option")
            x = x.toLocaleLowerCase()
            option.value = x
            option.text = `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`
            return option
        })
    const print = n => (html.output.value = n)
    makeOptions(["binary", "hexadecimal"]).forEach(x => html.convertTo.add(x))

    function convert(to, n) {
        n = Number(n) || 0
        const formats = {
            binary: n => (n >>> 0).toString(2),
            hexadecimal: n => n.toString(16).toLocaleUpperCase(),
        }

        return formats[to](n)
    }

    html.button.addEventListener("click", () =>
        print(convert(html.convertTo.value, html.numberField.value))
    )
}
