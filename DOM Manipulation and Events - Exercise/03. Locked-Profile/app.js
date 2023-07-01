function lockedProfile() {
    console.log(Array.from(document.querySelectorAll(".profile button")));
    Array.from(document.querySelectorAll(".profile button")).forEach((e) =>
        e.addEventListener("click", onClick)
    );

    function onClick(event) {
        const parent = event.target.parentElement;
        const unclockedCheck = parent.querySelector('input[value="unlock"]');
        if (unclockedCheck.checked) {
            const hiidenDiv = parent.querySelector("div");
            hiidenDiv.style.display === "block" ?
                (hiidenDiv.style.display = "none") :
                (hiidenDiv.style.display = "block");

            event.target.textContent === 'Show more' ?
                (event.target.textContent = 'Hide it') :
                (event.target.textContent = 'Show more');
        }
    }
}
//
console.log("----------");
//

function lockedProfile() {
    const toggle = (btn, content) => {
        if (btn.innerHTML === "Show more") {
            btn.innerHTML = "Hide it"
            content.style.display = "block"
        } else {
            btn.innerHTML = "Show more"
            content.style.display = "none"
        }
    }

    document.getElementById("main").addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            const parent = e.target.parentNode
            const isUnlocked =
                parent.querySelector("input[type=radio]:checked").value ===
                "unlock"

            if (isUnlocked) {
                const infoDiv = parent.querySelector("div")
                toggle(e.target, infoDiv)
            }
        }
    })
}