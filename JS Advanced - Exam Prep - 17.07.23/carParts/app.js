function solve() {
const form = document.querySelector('form');
const nextButton = document.getElementById('next-btn');
const infoList = document.querySelector('.info-list');
const completeImg = document.getElementById('complete-img');
const completeText = document.getElementById('complete-text');

nextButton.addEventListener('click', function (event) {
  event.preventDefault();

  const carModelInput = document.getElementById('car-model');
  const carYearInput = document.getElementById('car-year');
  const partNameInput = document.getElementById('part-name');
  const partNumberInput = document.getElementById('part-number');
  const conditionInput = document.getElementById('condition');

  const carModel = carModelInput.value.trim();
  const carYear = parseInt(carYearInput.value);
  const partName = partNameInput.value.trim();
  const partNumber = partNumberInput.value.trim();
  const condition = conditionInput.value;

  if (
    carModel === '' ||
    isNaN(carYear) ||
    carYear < 1980 ||
    carYear > 2023 ||
    partName === '' ||
    partNumber === '' ||
    condition === ''
  ) {
    return;
  }

  const listItem = document.createElement('li');
  listItem.classList.add('part-content');

  const article = document.createElement('article');

  const carModelP = document.createElement('p');
  carModelP.textContent = `Car Model: ${carModel}`;
  article.appendChild(carModelP);

  const carYearP = document.createElement('p');
  carYearP.textContent = `Car Year: ${carYear}`;
  article.appendChild(carYearP);

  const partNameP = document.createElement('p');
  partNameP.textContent = `Part Name: ${partName}`;
  article.appendChild(partNameP);

  const partNumberP = document.createElement('p');
  partNumberP.textContent = `Part Number: ${partNumber}`;
  article.appendChild(partNumberP);

  const conditionP = document.createElement('p');
  conditionP.textContent = `Condition: ${condition}`;
  article.appendChild(conditionP);

  listItem.appendChild(article);

  infoList.appendChild(listItem);

  carModelInput.value = '';
  carYearInput.value = '';
  partNameInput.value = '';
  partNumberInput.value = '';
  conditionInput.value = '';

  nextButton.disabled = true;

  const editButton = document.createElement('button');
  editButton.classList.add('edit-btn');
  editButton.textContent = 'Edit';
  listItem.appendChild(editButton);

  const continueButton = document.createElement('button');
  continueButton.classList.add('continue-btn');
  continueButton.textContent = 'Continue';
  listItem.appendChild(continueButton);
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('edit-btn')) {
    const listItem = event.target.parentNode;
    const article = listItem.querySelector('article');
    const carModelP = article.querySelector('p:nth-child(1)');
    const carYearP = article.querySelector('p:nth-child(2)');
    const partNameP = article.querySelector('p:nth-child(3)');
    const partNumberP = article.querySelector('p:nth-child(4)');
    const conditionP = article.querySelector('p:nth-child(5)');

    const carModelInput = document.getElementById('car-model');
    const carYearInput = document.getElementById('car-year');
    const partNameInput = document.getElementById('part-name');
    const partNumberInput = document.getElementById('part-number');
    const conditionInput = document.getElementById('condition');

    carModelInput.value = carModelP.textContent.replace('Car Model: ', '');
    carYearInput.value = parseInt(carYearP.textContent.replace('Car Year: ', ''));
    partNameInput.value = partNameP.textContent.replace('Part Name: ', '');
    partNumberInput.value = partNumberP.textContent.replace('Part Number: ', '');
    conditionInput.value = conditionP.textContent.replace('Condition: ', '');

    listItem.remove();

    const nextButton = document.getElementById('next-btn');
    nextButton.disabled = false;
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('continue-btn')) {
    const listItem = event.target.parentNode;
    const article = listItem.querySelector('article');

    const confirmList = document.querySelector('.confirm-list');

    confirmList.innerHTML = '';

    const confirmListItem = document.createElement('li');
    confirmListItem.classList.add('part-content');
    confirmList.appendChild(confirmListItem);

    const confirmArticle = document.createElement('article');
    confirmListItem.appendChild(confirmArticle);

    const carModelP = document.createElement('p');
    carModelP.textContent = article.querySelector('p:nth-child(1)').textContent;
    confirmArticle.appendChild(carModelP);

    const carYearP = document.createElement('p');
    carYearP.textContent = article.querySelector('p:nth-child(2)').textContent;
    confirmArticle.appendChild(carYearP);

    const partNameP = document.createElement('p');
    partNameP.textContent = article.querySelector('p:nth-child(3)').textContent;
    confirmArticle.appendChild(partNameP);

    const partNumberP = document.createElement('p');
    partNumberP.textContent = article.querySelector('p:nth-child(4)').textContent;
    confirmArticle.appendChild(partNumberP);

    const conditionP = document.createElement('p');
    conditionP.textContent = article.querySelector('p:nth-child(5)').textContent;
    confirmArticle.appendChild(conditionP);

    const confirmButton = document.createElement('button');
    confirmButton.classList.add('confirm-btn');
    confirmButton.textContent = 'Confirm';
    confirmListItem.appendChild(confirmButton);

    const cancelButton = document.createElement('button');
    cancelButton.classList.add('cancel-btn');
    cancelButton.textContent = 'Cancel';
    confirmListItem.appendChild(cancelButton);

    listItem.remove();
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('confirm-btn')) {
    const listItem = event.target.parentNode;
    listItem.remove();

    const nextButton = document.getElementById('next-btn');
    nextButton.disabled = false;

    completeImg.style.visibility = 'visible';
    completeText.textContent = 'Part is Ordered!';
  }
});

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('cancel-btn')) {
    const listItem = event.target.parentNode;
    listItem.remove();

    const nextButton = document.getElementById('next-btn');
    nextButton.disabled = false;
  }
});
};

   

    
    
