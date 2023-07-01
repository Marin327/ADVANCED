function solve() {
  let buttons = document.getElementsByTagName('button');
  let generateBtn = buttons[0];
  let textAreas = document.getElementsByTagName('textarea');
  let namesOfFurnitures = [];
  let totalPrice = 0;
  let totalDecorations = 0;
  let counter = 0;

  generateBtn.addEventListener('click', () => {
      let inputOfFurnitures = textAreas[0].value;
      inputOfFurnitures = JSON.parse(inputOfFurnitures);

      for (let i = 0; i < inputOfFurnitures.length; i++) {
          fillUpTableWithFurnitures(inputOfFurnitures[i]);
      }
  });

  let buyBtn = buttons[1];

  buyBtn.addEventListener('click', () => {
      let inputs = document.getElementsByTagName('input');
      Array.from(inputs);

      for (const input of inputs) {
          if (input.checked === true) {
              let parent = input.parentElement.parentElement.children;
              let name = parent[1].innerText.trim();
              let price = +parent[2].innerText;
              let decorFac = +parent[3].innerText;

              namesOfFurnitures.push(name);
              totalPrice += price;
              totalDecorations += decorFac;
              counter++;

              textAreas[1].value = getOutput(
                  namesOfFurnitures,
                  totalPrice,
                  totalDecorations
              );
          }
      }
  });

  function fillUpTableWithFurnitures(furniture) {
      let tbody = document.getElementsByTagName('tbody')[0];
      let row = tbody.insertRow(-1);

      let img = document.createElement('img');
      img.src = furniture.img;

      let input = document.createElement('input');
      input.setAttribute('type', 'checkbox');

      row.insertCell(0).appendChild(img);
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      let p3 = document.createElement('p');
      row.insertCell(1).appendChild(p1).innerHTML = furniture.name;
      row.insertCell(2).appendChild(p2).innerHTML = furniture.price;
      row.insertCell(3).appendChild(p3).innerHTML = furniture.decFactor;
      row.insertCell(4).appendChild(input);
  }

  function getOutput(namesOfFurnitures, totalPrice, totalDecorations) {
      // let sum = selectedFunitures['averageDecFac'].reduce((a, b) => a + b, 0);
      let average = totalDecorations / counter;

      return (
          `Bought furniture: ${namesOfFurnitures.join(', ')}\n` +
          `Total price: ${totalPrice.toFixed(2)}\n` +
          `Average decoration factor: ${average}`
      );
  }
}
//
console.log("---------");
//
function solve() {
  const [generateBtn, buyBtn] = document.getElementsByTagName("button")
  const [generateInput, buyOutput] = document.getElementsByTagName("textarea")
  const tableBody = document.querySelector("tbody")

  const htmlTemplate = ({ img, name, price, decFactor }) => {
      const row = document.createElement("tr")

      row.innerHTML = `<td><img src=${img}></td>
<td><p>${name}</p></td>
<td><p>${price}</p></td>
<td><p>${decFactor}</p></td>
<td><input type="checkbox"/></td>`

      return row
  }

  const generate = () =>
      JSON.parse(generateInput.value).forEach(x =>
          tableBody.appendChild(htmlTemplate(x))
      )

  const buy = () => {
      const braindeadData = Array.from(
          tableBody.querySelectorAll("input[type=checkbox]:checked")
      ).map(x =>
          Array.from(x.parentNode.parentNode.children)
              .slice(1, 4)
              .map(
                  x =>
                      Number(x.children[0].innerHTML) ||
                      x.children[0].innerHTML
              )
      )
      const getSum = arr => arr.reduce((a, v) => a + v, 0)

      const names = braindeadData.map(x => x[0]).join(", ")
      const prices = getSum(braindeadData.map(x => x[1]))
      const avFactors =
          getSum(braindeadData.map(x => x[2])) / braindeadData.length

      buyOutput.value = `Bought furniture: ${names}
Total price: ${prices.toFixed(2)}
Average decoration factor: ${avFactors}`
  }

  generateBtn.addEventListener("click", generate)
  buyBtn.addEventListener("click", buy)
}
//
console.log("---------");
//

function solve() {
  const [generateBtn, buyButn] = Array.from(
    document.querySelectorAll("button")
    );
  generateBtn.addEventListener("click", generate);
  buyButn.addEventListener("click", buy);

  function generate() {
    const input = JSON.parse(document.querySelector("textarea").value);
    input.forEach((element) => {
      const tr = document.createElement("tr");
      const td1 = document.createElement("td");
      const img = document.createElement("img");
      img.src = element.img;
      td1.appendChild(img);
      tr.appendChild(td1);
      const p1 = document.createElement("p");
      const td2 = document.createElement("td");
      p1.textContent = element.name;
      td2.appendChild(p1);
      tr.appendChild(td2);
      const td3 = document.createElement("td");
      const p2 = document.createElement("p");
      p2.textContent = Number(element.price);
      td3.appendChild(p2);
      tr.appendChild(td3);
      const td4 = document.createElement("td");
      const p3 = document.createElement("p");
      p3.textContent = Number(element.decFactor);
      td4.appendChild(p3);
      tr.appendChild(td4);
      const td5 = document.createElement("td");
      const input = document.createElement("input");
      input.type = "checkbox";
      td5.appendChild(input);
      tr.appendChild(td5);
      document.querySelector("tbody").appendChild(tr);
    });
  }

  function buy() {
    const checkBoxes = Array.from(
      document.querySelectorAll("tbody input")
    ).filter((x) => x.checked);
    const bought = [];
    let price  = 0;
    let decoration = 0;
    checkBoxes.forEach((element) => {
      const parent = element.parentElement.parentElement;
      const data = Array.from(parent.querySelectorAll("p"));
      bought.push(data[0].textContent);
      price += Number(data[1].textContent);
      decoration += Number(data[2].textContent);
    });
    const output = document.querySelectorAll("textarea")[1];
    output.textContent += `Bought furniture: ${bought.join(", ")}\r\n`;
    output.textContent += `Total price: ${price.toFixed(2)}\r\n`;
    output.textContent += `Average decoration factor: ${
      decoration / checkBoxes.length
    }`
  }
}