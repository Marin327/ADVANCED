function solution() {
    // Get references to the relevant DOM elements
    const addBtn = document.querySelector('button');
    const employeeInput = document.querySelector('#employee');
    const categoryInput = document.querySelector('#category');
    const urgencyInput = document.querySelector('#urgency');
    const teamInput = document.querySelector('#team');
    const descriptionInput = document.querySelector('#description');
    const previewList = document.querySelector('.preview-list');
    const pendingList = document.querySelector('.pending-list');
    const resolvedList = document.querySelector('.resolved-list');
    
    // Add event listener to the "Add" button
    addBtn.addEventListener('click', function () {
        // Get the input values
        const employee = employeeInput.value.trim();
        const category = categoryInput.value.trim();
        const urgency = urgencyInput.value.trim();
        const team = teamInput.value.trim();
        const description = descriptionInput.value.trim();
        
        // Check if any of the fields is empty
        if (employee === '' || category === '' || urgency === '' || team === '' || description === '') {
            return;
        }
        
        // Create a list item and add it to the "Preview" section
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h2>${employee}</h2><span>${category}</span><span>${urgency}</span><span>${team}</span><p>${description}</p>`;
        previewList.appendChild(listItem);
        
        // Clear the input fields
        employeeInput.value = '';
        categoryInput.value = '';
        urgencyInput.value = '';
        teamInput.value = '';
        descriptionInput.value = '';
        
        // Disable the "Add" button and add "Edit" and "Continue" buttons
        addBtn.disabled = true;
        
        // Add "Edit" button
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', function () {
            // Load information back into input fields
            employeeInput.value = employee;
            categoryInput.value = category;
            urgencyInput.value = urgency;
            teamInput.value = team;
            descriptionInput.value = description;
            
            // Remove list items from "Preview" section
            listItem.remove();
            
            // Enable the "Add" button
            addBtn.disabled = false;
            
            // Remove "Edit" and "Continue" buttons
            editBtn.remove();
            continueBtn.remove();
        });
        
        // Add "Continue" button
        const continueBtn = document.createElement('button');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', function () {
            // Transfer information to "Pending" section
            pendingList.appendChild(listItem);
            
            // Remove "Edit" and "Continue" buttons
            editBtn.remove();
            continueBtn.remove();
            
            // Add "Resolved" button
            const resolvedBtn = document.createElement('button');
            resolvedBtn.textContent = 'Resolved';
            resolvedBtn.addEventListener('click', function () {
                // Transfer information to "Resolved" section
                resolvedList.appendChild(listItem);
                
                // Remove "Resolved" button
                resolvedBtn.remove();
            });
            
            // Add "Resolved" button
            listItem.appendChild(resolvedBtn);
        });
        
        // Add "Edit" and "Continue" buttons
        listItem.appendChild(editBtn);
        listItem.appendChild(continueBtn);
    });
}