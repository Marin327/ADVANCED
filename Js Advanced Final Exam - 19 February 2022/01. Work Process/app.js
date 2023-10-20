function solve() {
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const birth = document.getElementById('birth');
    const position = document.getElementById('position');
    const salary = document.getElementById('salary');
    const tbody = document.getElementById('tbody');
    const addSalary = document.getElementById('sum');

    document.getElementById("add-worker").addEventListener("click", (e) => {
        e.preventDefault();
        if (fname.value &&
            lname.value &&
            email.value &&
            birth.value &&
            position.value &&
            salary.value
        ) {
            addEmployee(e,
                fname.value,
                lname.value,
                email.value,
                birth.value,
                position.value,
                salary.value);

            clearInputFields();
        }
    });

    function addEmployee(e, fname, lname, email, birth, position, salary) {
        const tr = createElement("tr");
        createElement('td', `${fname}`, tr);
        createElement('td', `${lname}`, tr);
        createElement('td', `${email}`, tr);
        createElement('td', `${birth}`, tr);
        createElement('td', `${position}`, tr);
        createElement('td', `${salary}`, tr);

        const td = createElement("td", "", tr);
        let fireBtn = createElement('button', "fired", td);
        fireBtn.setAttribute('class', 'fired');
        let editBtn = createElement("button", "Edit", td);
        editBtn.setAttribute("class", "edit");
        tbody.appendChild(tr);

        const currentSalary = Number(addSalary.textContent);
        addSalary.textContent = (Number(salary) + currentSalary).toFixed(2);
        editBtn.addEventListener('click', (e) =>
            editWorker(e, fname, lname, email, birth, position, salary)
        );

        fireBtn.addEventListener("click", (e) => fireEmployee(e, salary))

    }

    function fireEmployee(e, salary) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();
        reduceCurrentSalarySum(salary);
    }

    function editWorker(
        e,
        firstName,
        lastName,
        emailAdress,
        birthDate,
        currentPosition,
        currentSalary
    ) {
        e.preventDefault();
        e.target.parentNode.parentNode.remove();
        fname.value = firstName;
        lname.value = lastName;
        email.value = emailAdress;
        birth.value = birthDate;
        position.value = currentPosition;
        salary.value = currentSalary;
        reduceCurrentSalarySum(currentSalary);

    }

    function reduceCurrentSalarySum(salary) {
        const sumSalary = Number(addSalary.textContent);
        addSalary.textContent = Math.abs((Number(salary) - sumSalary)).toFixed(2);

    }

    function createElement(type, content, parent) {
        const element = document.createElement(type);
        element.textContent = content;
        if (parent) {
            parent.appendChild(element);
        }

        return element;
    }

    function clearInputFields() {
        fname.value = '';
        lname.value = '';
        email.value = '';
        birth.value = '';
        position.value = '';
        salary.value = '';
    }
}
solve()
//
console.log("-----------");

// function solve() {
//     let salarySum = 0;
//     const inputs = getInputs();

//     document.getElementById('add-worker')
//         .addEventListener('click', onAddWorkerClick);

//     function onAddWorkerClick(ev) {
//         ev.preventDefault();
//         if (!isValid()) return;
//         createRow();
//         clearInput();
//     }

//     function setInputsData(data) {
//         Object.entries(inputs)
//             .forEach(([name, input]) => input.value = data[name]);
//     }

//     function createRow() {
//         const data = getData();
//         data.salary = Number(data.salary);
//         const tr = createElement('tr');
//         tr.appendChild(createElement('td',data.fname));
//         tr.appendChild(createElement('td',data.lname));
//         tr.appendChild(createElement('td',data.email));
//         tr.appendChild(createElement('td',data.birth));
//         tr.appendChild(createElement('td',data.position));
//         tr.appendChild(createElement('td',data.salary));
//         const firedBtn = createElement('button', 'Fired', 'fired');
//         const editBtn = createElement('button', 'Edit', 'edit');
//         const tdAction = createElement('td');
//         tdAction.appendChild(firedBtn);
//         tdAction.appendChild(editBtn);
//         tr.appendChild(tdAction);
//         document.getElementById('tbody').appendChild(tr);
//         salarySum += data.salary;
//         document.getElementById('sum').textContent = salarySum.toFixed(2);

//         editBtn.addEventListener('click', (ev)=>{
//             ev.preventDefault();
//             tr.remove();
//             salarySum -= data.salary;
//             document.getElementById('sum').textContent = salarySum.toFixed(2);
//             setInputsData(data);
//         });

//         firedBtn.addEventListener('click', (ev)=>{
//             ev.preventDefault();
//             tr.remove();
//             salarySum -= data.salary;
//             document.getElementById('sum').textContent = salarySum.toFixed(2);
//         });
//     }

//     function getInputs() {
//         return Object.fromEntries(
//             Array.from(document.querySelectorAll('input, textarea'))
//                 .map(i => [i.id, i]));
//     }

//     function createElement(type, text, cssClass) {
//         const element = document.createElement(type);
//         if (text) {
//             element.textContent = text;
//         }

//         if (cssClass) {
//             element.className = cssClass;
//         }
//         return element;
//     }

//     function getData() {
//         return Object.fromEntries(
//             Object.entries(inputs)
//                 .map(([name, input]) => [name, input.value])
//         );
//     }

//     function isValid() {
//         return Object.values(inputs)
//             .every(i => i.value);
//     }

//     function clearInput() {
//         Object.values(inputs).forEach(i => i.value = '');
//     }
// }
// solve();