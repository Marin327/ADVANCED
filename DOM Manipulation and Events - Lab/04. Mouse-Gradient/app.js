function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', onClick);

    function onClick(event) {
        const x = event.offsetX;
        const percent = Math.floor(x / 300 * 100);
        document.getElementById('result').textContent = percent + '%';

    }
}
//
console.log("--------");
//
function attachGradientEvents() {
    const html = {
        hoverDiv: document.getElementById("gradient"),
        output: document.getElementById("result"),
    }

    function displayPercent(event, element) {
        html.output.textContent = `${Math.floor(
            (event.offsetX / event.target.clientWidth) * 100
        )}%`
    }

    html.hoverDiv.addEventListener("mousemove", e =>
        displayPercent(e, html.hoverDiv)
    )
}