function solution() {
    const firstName = document.getElementById('fname');
    const lastName = document.getElementById('lname');
    const numberOfPeople = document.getElementById('people');
    const fromDate = document.getElementById('from');
    const numberOfDays = document.getElementById('days');

    const nextStepBtn = document.getElementById('submit');
    const editBtn = document.getElementById('edit');
    const continueBtn = document.getElementById('continue');
    const confirmBtn = document.getElementById('confirm');
    const cancelBtn = document.getElementById('cancel');
    const backBtn = document.getElementById('back-btn');

    const ticketInfoList = document.querySelector('.ticket-info-list');
    const confirmTicketList = document.querySelector('.confirm-ticket ul');

    nextStepBtn.addEventListener('click', function () {
        if (firstName.value === '' || lastName.value === '' || numberOfPeople.value === '' ||
            fromDate.value === '' || numberOfDays.value === '') {
            return;
        }

        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>Name:</strong> ${firstName.value} ${lastName.value}
        <p><strong>Number of people:</strong> ${numberOfPeople.value}</p>
        <p><strong>From:</strong> ${fromDate.value}</p>
        <p><strong>Number of days:</strong> ${numberOfDays.value}</p>`;

        ticketInfoList.appendChild(listItem);

        firstName.value = '';
        lastName.value = '';
        numberOfPeople.value = '';
        fromDate.value = '';
        numberOfDays.value = '';

        nextStepBtn.disabled = true;
        editBtn.disabled = false;
        continueBtn.disabled = false;
    });

    editBtn.addEventListener('click', function () {
        const listItems = ticketInfoList.getElementsByTagName('li');
        const listItem = listItems[listItems.length - 1];

        const name = listItem.querySelector('strong').textContent;
        const info = listItem.querySelectorAll('p');

        const nameArr = name.split(': ')[1].split(' ');
        const people = info[0].textContent.split(': ')[1];
        const from = info[1].textContent.split(': ')[1];
        const days = info[2].textContent.split(': ')[1];

        firstName.value = nameArr[0];
        lastName.value = nameArr[1];
        numberOfPeople.value = people;
        fromDate.value = from;
        numberOfDays.value = days;

        ticketInfoList.removeChild(listItem);

        nextStepBtn.disabled = false;
        editBtn.disabled = true;
        continueBtn.disabled = true;
    });

    continueBtn.addEventListener('click', function () {
        const listItems = ticketInfoList.getElementsByTagName('li');
        const listItem = listItems[listItems.length - 1];

        const clonedListItem = listItem.cloneNode(true);
        confirmTicketList.appendChild(clonedListItem);

        ticketInfoList.removeChild(listItem);

        editBtn.disabled = true;
        continueBtn.disabled = true;
        confirmBtn.style.display = 'inline-block';
        cancelBtn.style.display = 'inline-block';
    });

    cancelBtn.addEventListener('click', function () {
        const listItems = confirmTicketList.getElementsByTagName('li');
        const listItem = listItems[listItems.length - 1];

        confirmTicketList.removeChild(listItem);

        nextStepBtn.disabled = false;
        confirmBtn.style.display = 'none';
        cancelBtn.style.display = 'none';
    });

    confirmBtn.addEventListener('click', function () {
        const mainDiv = document.getElementById('main');
        const thankYou = document.createElement('h1');
        thankYou.textContent = 'Thank you, have a nice day!';
        const backBtn = document.createElement('button');
        backBtn.textContent = 'Back';

        mainDiv.style.display = 'none';
        document.body.appendChild(thankYou);
        document.body.appendChild(backBtn);

        backBtn.addEventListener('click', function () {
            location.reload();
        });
    });
}