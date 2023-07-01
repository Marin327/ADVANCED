function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll("textarea");
    const buttons = document.querySelectorAll("button");
    buttons[0].addEventListener("click", encode);
    buttons[1].addEventListener("click", decode);

    function encode() {
        let encodedMessage = "";
        const input = textAreas[0].value;
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            encodedMessage += String.fromCharCode(element.charCodeAt(0) + 1);
        }
        textAreas[1].value = encodedMessage;
        textAreas[0].value = "";
    }

    function decode() {
        let decodedMessages = "";
        const input = textAreas[1].value
        for (let index = 0; index < input.length; index++) {
            const element = input[index];
            decodedMessages += String.fromCharCode(element.charCodeAt(0) - 1);
        }
        textAreas[1].value = decodedMessages;
    }
}
//
console.log("--------");
//

function encodeAndDecodeMessages() {
    const [encodeField, decodeField] = document.querySelectorAll("textarea")

    const transform = (str, type) =>
        str
            .split("")
            .map(x =>
                String.fromCharCode(
                    type === "encode"
                        ? x.charCodeAt(0) + 1
                        : x.charCodeAt(0) - 1
                )
            )
            .join("")

    document.addEventListener("click", e => {
        if (e.target.tagName === "BUTTON") {
            if (e.target.textContent.includes("Encode")) {
                decodeField.value = transform(encodeField.value, "encode")
                encodeField.value = ""
            } else {
                decodeField.value = transform(decodeField.value, "decode")
            }
        }
    })
}