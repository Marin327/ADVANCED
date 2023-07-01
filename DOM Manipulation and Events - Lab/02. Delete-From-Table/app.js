function deleteByEmail() {
    // read input value
    const query = document.querySelector('input[name="email"]').value
    // get all rows
    const rows = document.querySelectorAll('#customers tbody tr')
    const rowsArray = Array.from(rows);

  const match = rowsArray.find(row => row.children[1].textCOntent == query);

  if(match) {
    match.remove();
    document.getElementById('result').textContent = 'Deleted.';
  }

    document.getElementById('result').textContent = 'Not found.';
}
//
console.log("----------")
//
function deleteByEmail() {
    const data = {
        emails: Array.from(
            document.querySelectorAll("tbody tr td:nth-child(2)")
        ),
        inputValue: document.querySelector("body > label > input[type=text]")
            .value,
        outputField: document.getElementById("result"),
    }
    let removed = false

    data.emails.forEach(x => {
        if (x.innerHTML.includes(data.inputValue)) {
            x.parentNode.remove()
            data.outputField.innerHTML = "Deleted."
            removed = true
        }
    })

    if (removed === false) data.outputField.innerHTML = "Not found."
}