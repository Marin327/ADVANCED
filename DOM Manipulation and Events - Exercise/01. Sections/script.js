function create(words) {
   const parent = document.getElementById("content");
   words.forEach(element => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = element;
    p.style.display = "block";
    div.appendChild(p);
    div.addEventListener("click", (event) => {
event.target.querySelector("p").style.display = "block";
    });
    parent.appendChild(div)
   });
}
//
console.log("----------");
//
function create(arr) {
    const elements = []
    const output = document.getElementById("content")

    function eFactory(tag, content = "") {
        const temp = document.createElement(tag)
        temp.innerHTML = content

        return temp
    }

    arr.forEach(x => {
        const div = eFactory("div")
        const p = eFactory("p", x)
        p.style.display = "none"
        
        div.appendChild(p)
        div.addEventListener("click", () => (p.style.display = "block"))
        elements.push(div)
    })

    elements.forEach(x => output.appendChild(x))
}
