// function solve() {
// const nameInput = document.getElementById('recipientName');
// const titleInput = document.getElementById('title');
// const messageInput = document.getElementById('message');
// const deleted = document.querySelector('.delete-list');
// const sent = document.querySelector('.sent-list');

// document.getElementById('add').addEventListener('click', createMail);
// document.getElementById('reset').addEventListener('click', onReset);

// //1. create mail process
// // - add listener to create button
// // - read input fields
// // = validate all fields are enteres
// // - create mail element from input
// // - add event listener to send button
// // - add event listener to delete button
// // - clear input fields


// function createMail(event) {
// event.preventDefault();
// const name = nameInput.value;
// const title = titleInput.value;
// const message = messageInput.value;

// if(name == '' || title == '' || message == '') {
//     return;
// }
// const element = document.createElement('li');
// element.innerHTML = `
// <h4>Title: ${title}</h4>
// <h4>Recipient Name: ${name}</h4>
// <span>${message}</span>
// <div id="list-action">
//    <button type="submit" id="send">Send</button>
//    <button type="submit" id="delete">Delete</button>
//  </div>`;

//  element.querySelector('#send').addEventListener('click', sendMail);
// element.querySelector('#delete').addEventListener('click', deleteMail);
// list.appendChild(element);
// return resetInput();

// //2. send Mail process
// function sendMail(event) {
// const sentMailElement = document.createElement('li');
// sentMailElement.innerHTML = `
// <span>To: ${name}</span>
// <span>Title: ${title}</span>
// <div class="btn">
//     <button type="submit" class="delete">Delete</button>
// </div>`;

// sentMailElement.querySelector('.delete').addEventListener('click', () => {
// const deletedMailElement = document.createElement('li');
// deletedMailElement.innerHTML = ` 
// <span>To: ${name}</span>
// <span>Title: ${title}</span>`;

// deleted.appendChild(deletedMailElement);
// sentMailElement.remove();
// });
// sent.appendChild(sentMailElement);
// element.remove();
// }


// //3. delete mail process
// // - read data from closure
// // - create deleted mail element
// // - add element to dom
// // - remove formet element from dom
// function deleteMail() {
// const deletedMailElement = document.createElement('li');
// deletedMailElement.innerHTML = `
// <span>To:${name}</span>
// <span>Title: ${title}</span>`;
// deleted.appendChild(deletedMailElement);
// element.remove();
//  }
// }
// function onReset(event) {
//     event.preventDefault();
//     resetInput();
// }

// //3. delete mail process
// // - read data from closure
// // - create deleted mail element
// // - add element to dom
// // - remove formet element from dom

// //4. reset process
// // add listener to reset button
// // - clear input fields
//  function resetInput() {
// nameInput.value = '';
// titleInput.value = '';
// messageInput.value = '';
//  }
// }

// solve()

//

function solve() {
    const inputs = Object.fromEntries(
        Array.from(document.querySelectorAll('input, textarea'))
            .map(i => [i.id, i]));

    const addBtn = document.getElementById('add');

    function onResetClick(ev) {
        ev.preventDefault();
        clearInput();
    }

    document.getElementById('reset').addEventListener('click', onResetClick);

    addBtn.addEventListener('click', onAddClick);

    function onAddClick(ev) {
        ev.preventDefault();
        if (!isValid()) return;

        let data = getData();
        const li = getElements();
        document.getElementById('list').appendChild(li);
        clearInput();


        function getElements() {
            const li = createElement('li');
            li.appendChild(createElement('h4', `Title: ${data.title}`));
            li.appendChild(createElement('h4', `Recipient Name: ${data.recipientName}`));
            li.appendChild(createElement('span', data.message));
            const div = createElement('div', '', 'list-action');
            const sendBtn = createElement('button', 'Send');
            sendBtn.id = 'send';
            sendBtn.type = 'submit';
            const deleteBtn = createElement('button', 'Delete');
            deleteBtn.id = 'delete';
            deleteBtn.type = 'submit';
            div.appendChild(sendBtn);
            div.appendChild(deleteBtn);
            li.appendChild(div);

            sendBtn.addEventListener('click', onSendClick)
            deleteBtn.addEventListener('click', (ev) => {
                ev.preventDefault();
                li.remove();
                const sent = createElement('li');
                sent.appendChild(createElement('span', `To: ${data.recipientName}`));
                sent.appendChild(createElement('span', `Title: ${data.title}`));
                document.querySelector('.delete-list').appendChild(sent);
            })

            function onSendClick() {
                const sent = createElement('li');
                sent.appendChild(createElement('span', `To: ${data.recipientName}`));
                sent.appendChild(createElement('span', `Title: ${data.title}`));
                const sentDiv = createElement('div', '', 'btn');
                const sentDeleteBtn = createElement('button', 'Delete', 'delete');
                sentDeleteBtn.type = 'submit';
                sentDiv.appendChild(sentDeleteBtn);
                sent.appendChild(sentDiv);
                sentDeleteBtn.addEventListener('click', (ev) => {
                    ev.preventDefault();
                    sentDiv.remove();
                    document.querySelector('.delete-list').appendChild(sent);
                })
                li.remove();
                document.querySelector('.sent-list').appendChild(sent);
            }

            return li;
        }
    }


    function createElement(type, text, cssClass) {
        const element = document.createElement(type);
        if (text) {
            element.textContent = text;
        }

        if (cssClass) {
            element.className = cssClass;
        }
        return element;
    }

    function getData() {
        return Object.fromEntries(
            Object.entries(inputs)
                .map(([name, input]) => [name, input.value])
        );
    }

    function isValid() {
        return Object.values(inputs)
            .every(i => i.value);
    }

    function clearInput() {
        Object.values(inputs).forEach(i => i.value = '');
    }
}
solve()