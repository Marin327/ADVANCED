function solve() {
 
    const addButton = document.querySelector('.button-section input');
    const form = document.querySelector('form');
 
    const [preview, collection] = Array.from(document.querySelectorAll('#side-wrapper div ul'));
    let saveBtn;
    let editBtn;
    let cancelBtn;
 
    addButton.addEventListener('click', (event) => {
        event.preventDefault();
 
        const formData = new FormData(form);
 
        const transformedData = Object.entries(Object.fromEntries(formData)).reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});
        if (Object.values(transformedData).some(el => el.trim() == '')) {
            return;
        }
 
        addButton.disabled = true;
 
        preview.innerHTML = `
        <li class="gem-info">
            <article>
                <h4>${transformedData.field1}</h4>
                <p>Color: ${transformedData.field2}</p>
                <p>Carats: ${transformedData.field3}$</p>
                <p>Price: ${transformedData.field4}$</p>
                <p>Type: ${transformedData.field5}</p>
            </article>
            <button class="save-btn">Save to Collection</button>
            <button class="edit-btn">Edit Information</button>
            <button class="cancel-btn">Cancel</button>
        </li>`
 
        // Get a reference to the buttons
        saveBtn = document.querySelector('.save-btn');
        editBtn = document.querySelector('.edit-btn');
        cancelBtn = document.querySelector('.cancel-btn');
 
        // Add click event listener to the "Save to Collection" button
        saveBtn.addEventListener('click', saveFunc.bind(null, transformedData));
 
        // Add click event listener to the "Edit Information" button
        editBtn.addEventListener('click', editFunc.bind(null, transformedData));
 
        // Add click event listener to the "Cancel" button
        cancelBtn.addEventListener('click', cancelFunc);
        form.reset();
    })
 
    function saveFunc(data) {
        addButton.disabled = false
        preview.innerHTML = '';
        collection.innerHTML += `
        <li>
            <p class="collection-item">${data.field1} - Color: ${data.field2}/ 
                Carats: ${data.field3}/ Price: ${data.field4}$/ Type: ${data.field5} 
            </p>
        </li>
        `
    }
    function editFunc(data) {
 
        const childrens = Array.from(form.querySelector('div .inner-wrap').children);
        childrens.forEach((ch, i) => ch.value = Object.values(data)[i]);
        preview.innerHTML = '';
 
        addButton.disabled = false
    }
    function cancelFunc(event) {
        addButton.disabled = false;
        preview.innerHTML = '';
    }
 
}