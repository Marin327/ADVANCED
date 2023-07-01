function solve() {

  const input = document.getElementById("text").value;
  const convetion = document.getElementById("naming-convention").value;
  const resultElement = document.getElementById("result");

  const toPascal = (text) =>
    text
    .split(" ")
    .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
    .join("");

  const toCamelCase = (text) => {
    text = toPascal(text);
    return text[0].toLowerCase() + text.slice(1);
  }

  if (convetion === "Pascal Case") {
    resultElement.textContent = toPascal(input);
  } else if (convetion === "Camel Case") {
    resultElement.textContent = toCamelCase(input);
  } else {
    resultElement.textContent = 'Error!'
  }
}

//
console.log("--------")

//

function solve() {
  const data = {
      case: document.getElementById("naming-convention").value,
      str: document.getElementById("text").value,
      resultSpan: document.getElementById("result"),
  }
  const result = data.str
      .split(" ")
      .map(x => x.toLocaleLowerCase())
      .map(x => `${x.charAt(0).toLocaleUpperCase()}${x.slice(1)}`)
      .join("")

  if (data.case !== "Camel Case" && data.case !== "Pascal Case") {
      data.resultSpan.innerHTML = "Error!"
  } else {
      data.resultSpan.innerHTML =
          data.case === "Pascal Case"
              ? result
              : `${result.charAt(0).toLocaleLowerCase()}${result.slice(1)}`
  }
}