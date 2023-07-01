function editElement(ref, match, replacer) {

        const text = ref.textContent;
        const result = text.split(match).join(replacer);
        ref.textContent = result;
    }
