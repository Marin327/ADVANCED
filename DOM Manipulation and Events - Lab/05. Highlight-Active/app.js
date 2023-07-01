function focused() {
 const inputs = Array.from(document.querySelectorAll('input'));

 for(let input of inputs) {
    input.addEventListener('focus', (event) => {
        event.target.parentElement.className = 'focused';
    });
    input.addEventListener('blur', (event) => {
        event.target.parentElement.className = '';
    });
 }
}
//
console.log("--------");

//
function focus() {
    const inputs = document.getElementsByTagName("input")

    const addFocus = e => (e.parentNode.className = "focused")
    const removeFocus = e => (e.parentNode.className = "")

    Array.from(inputs).forEach(x => {
        x.addEventListener("focus", e => addFocus(e.target))
        x.addEventListener("blur", e => removeFocus(e.target))
    })
}