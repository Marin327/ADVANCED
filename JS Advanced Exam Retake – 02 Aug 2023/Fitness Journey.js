function solution() {
  const nameInput = document.getElementById("fname");
  const emailInput = document.getElementById("email");
  const contactInput = document.getElementById("contact");
  const classInput = document.getElementById("class");
  const timeInput = document.getElementById("time");
  const nextBtn = document.getElementById("nextBtn");
  const editBtn = document.getElementById("editBtn");
  const continueBtn = document.getElementById("continueBtn");
  const confirmBtn = document.getElementById("confirmBtn");
  const cancelBtn = document.getElementById("cancelBtn");
  const doneBtn = document.getElementById("doneBtn");
  const previewSection = document.getElementById("preview-section");
  const classInfoList = document.getElementById("class-info");
  const confirmClassList = document.getElementById("confirm-class");

  nextBtn.addEventListener("click", function() {
    if (nameInput.value === "" || emailInput.value === "" || contactInput.value === "" || classInput.value === "" || timeInput.value === "") {
      return;
    }

    const listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${nameInput.value}<br>Email: ${emailInput.value}<br>Contact Number: ${contactInput.value}<br>Preferred Class: ${classInput.value}<br>Class Time: ${timeInput.value}`;
    classInfoList.appendChild(listItem);

    nameInput.value = "";
    emailInput.value = "";
    contactInput.value = "";
    classInput.value = "";
    timeInput.value = "";

    nextBtn.disabled = true;
    editBtn.style.display = "inline-block";
    continueBtn.style.display = "inline-block";
  });

  editBtn.addEventListener("click", function() {
    const listItem = classInfoList.querySelector("li");
    if (listItem) {
      nameInput.value = listItem.querySelector("span.name").textContent;
      emailInput.value = listItem.querySelector("span.email").textContent;
      contactInput.value = listItem.querySelector("span.contact").textContent;
      classInput.value = listItem.querySelector("span.class").textContent;
      timeInput.value = listItem.querySelector("span.time").textContent;

      classInfoList.removeChild(listItem);

      nextBtn.disabled = false;
      editBtn.style.display = "none";
      continueBtn.style.display = "none";
    }
  });

  continueBtn.addEventListener("click", function() {
    const listItem = classInfoList.querySelector("li");
    if (listItem) {
      const continueItem = document.createElement("li");
      continueItem.innerHTML = listItem.innerHTML;
      continueItem.classList.add("continue-info");
      confirmClassList.appendChild(continueItem);

      classInfoList.removeChild(listItem);

      editBtn.style.display = "none";
      continueBtn.style.display = "none";
      confirmBtn.style.display = "inline-block";
      cancelBtn.style.display = "inline-block";
    }
  });

  cancelBtn.addEventListener("click", function() {
    const listItem = confirmClassList.querySelector("li");
    if (listItem) {
      confirmClassList.removeChild(listItem);

      nextBtn.disabled = false;
      editBtn.style.display = "none";
      continueBtn.style.display = "none";
      confirmBtn.style.display = "none";
      cancelBtn.style.display = "none";
    }
  });

  confirmBtn.addEventListener("click", function() {
    const mainDiv = document.getElementById("main");
    const thankYouHeading = document.createElement("h1");
    thankYouHeading.id = "thank-you";
    thankYouHeading.textContent = "Thank you for scheduling your appointment, we look forward to seeing you!";
    const doneButton = document.createElement("button");
    doneButton.id = "done-btn";
    doneButton.textContent = "Done";

    mainDiv.parentNode.removeChild(mainDiv);
    document.body.appendChild(thankYouHeading);
    document.body.appendChild(doneButton);

    doneButton.addEventListener("click", function() {
      location.reload();
    });
  });
}