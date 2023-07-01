function addItem() {
    // read input value
    const text = document.getElementById("newItemText").value
    // create new <li>
    const li = document.createElement('li')
    li.textContent = text
    // obtain refetence to list element
    const list = document.getElementById('items')
    // add new <li> to list
    list.appendChild(li)
}
//
console.log("-------")
//
function addItem() {
    const data = {
        valueToAdd: document.getElementById("newItemText").value,
        list: document.getElementById("items"),
    }

    function eFactory(tag, content) {
        const temp = document.createElement(tag)
        temp.innerHTML = content
        return temp
    }

    data.list.appendChild(eFactory("li", data.valueToAdd))
}