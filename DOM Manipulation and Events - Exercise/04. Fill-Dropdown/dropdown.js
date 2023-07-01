function addItem() {

    const text = document.getElementById("newItemText");
    const value = document.getElementById("newItemValue");
    const option = document.createElement("option");
    option.textContent = text.value;
    option.value = value.value;
    document.getElementById("menu").appendChild(option);
    text.value = '';
    value.value = ''

}
//
console.log("-------");
//
function addItem() {
    const html = {
        text: document.getElementById("newItemText"),
        value: document.getElementById("newItemValue"),
        menu: document.getElementById("menu"),
    }

    const e = document.createElement("option")
    e.textContent = html.text.value
    e.value = html.value.value
    html.text.value = ""
    html.value.value = ""

    html.menu.appendChild(e)
}