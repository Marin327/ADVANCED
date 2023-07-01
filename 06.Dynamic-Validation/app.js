function validate() {
    const input = document.getElementById("email");
    input.addEventListener("change", () => {
        if(input.value.match(/^[a-z-\.]+@[a-z-\.]+\.[a-z]{2,4}/)) {
            input.classList.remove("error");
        } else {
            input.classList.add("error");
        }
    });
}
//
console.log("---");
//
function validate() {
    const pattern = new RegExp(/^\S+@\S+\.\S+$/gm);
    const inputElement  = document.getElementById('email');
    inputElement.addEventListener('change', onChane);
    function onChane(ev){
        ev.target.classList.remove('error');
        if(!pattern.test(ev.target.value)){
            ev.target.classList.add('error');
        }
    }
}
//
console.log("------");
//
function validate() {
    const input = document.getElementById("email")

    function isValidEmail(str) {
        if (/^[a-z]+@[a-z]+\.[a-z]+/g.test(str)) return true

        return false
    }

    function applyStyle(e, email) {
        e.className = isValidEmail(email) ? "" : "error"
    }
    input.addEventListener("change", e => applyStyle(e.target, e.target.value))
}