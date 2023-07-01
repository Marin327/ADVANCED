function validate() {
    const companyField = document.getElementById("companyInfo");
    const companyCheck = document.getElementById("company");
    const form = document.getElementById("registerForm");

    companyCheck.addEventListener("change", () => {
        if (companyCheck.checked) {
            companyField.style.display = "block";
        } else {
            companyField.style.display = "none";
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const userNameInput = document.getElementById("username");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const rePasswordInput = document.getElementById("confirm-password");
        const companyNumberInput = document.getElementById("companyNumber");

        const validField = document.getElementById("valid");

        const userNamePattern = /^[a-zA-z0-9]+$/;
        const passwordPattern = /^[\w]+$/;
        const emailPattern = /.*@.*\..*/;

        let usernameIsValid = false;
        let passIsValid = false;
        let rePassIsValid = false;
        let emailIsValid = false;
        let companyNumberIsValid = false;

        if (
            userNamePattern.test(userNameInput.value) &&
            userNameInput.value.length >= 3 &&
            userNameInput.value.length <= 20
        ) {
            usernameIsValid = true;
        }

        if (emailPattern.test(emailInput.value)) {
            emailIsValid = true;
        }


        if (
            passwordPattern.test(passwordInput.value) &&
            passwordInput.value.length >= 5 &&
            passwordInput.value.length <= 15 &&
            passwordInput.value === rePasswordInput.value
            ) {
            passIsValid = true;
            rePassIsValid = true;
        }

        if (companyCheck.checked) {
            if (companyNumberInput.value >= 1000 &&
                companyNumberInput.value <= 9999
            ) {
                companyNumberIsValid = true;
            }
            } else {
                companyNumberIsValid = "true";
        }
        if (usernameIsValid && 
            passIsValid && 
            rePassIsValid && 
            emailIsValid && 
            companyNumberIsValid
            ) {
            validField.style.display = "block";
        } else {
            validField.style.display = "none";
        }

        if (!usernameIsValid) {
            userNameInput.style.borderColor = "red";
        } else {
            userNameInput.style.border = "none";
        }
        if (!passIsValid) {
            passwordInput.style.borderColor = "red";
        } else {
            passwordInput.style.border = "none";
        }
        if (!rePassIsValid) {
            rePasswordInput.style.borderColor = "red";
        } else {
            rePasswordInput.style.border = "none";
        }
        if (!emailIsValid) {
            emailInput.style.borderColor = "red";
        } else {
            emailInput.style.border = "none";
        }
        if (!companyNumberIsValid) {
            companyNumberInput.style.borderColor = "red";
        } else {
            companyNumberInput.style.border = "none";
        }
    });
}
//
console.log("-----------");
//
function validate () {
    const html = {
        companyCheck: document.getElementById(`company`),
        submit: document.getElementById(`submit`),
        validDiv: document.getElementById(`valid`),
        companyInfo: document.getElementById(`companyInfo`)
    }

    const inputFields = {
        username: document.getElementById(`username`),
        email: document.getElementById(`email`),
        password: document.getElementById(`password`),
        'confirm-password': document.getElementById(`confirm-password`),
        companyNumber: document.getElementById(`companyNumber`),

    }

    const checkLength = (v, s, e) => v.length >= s && v.length <= e
    const checkPassword = (v, s, e, f) =>
        checkLength(v, s, e) && /^\w+$/g.test(v) && v === inputFields[f].value

    const validate = {
        username: (v) => checkLength(v, 3, 20) && /^[a-zA-Z0-9]*$/g.test(v),
        password: (v) => checkPassword(v, 5, 15, 'confirm-password'),
        'confirm-password': (v) => checkPassword(v, 5, 15, 'password'),
        email: (v) => /^.*@.*\..*$/g.test(v),
        companyNumber: (v, c) => c ? v >= 1000 && v <= 9999 : true
    }

    const changeBorder = (c, e) => {
        const style = c ? 'border: none' : 'border-color: red'

        e.style = style
    }

    html.companyCheck.addEventListener('change', (e) => {
        if (e.target.checked === true) {
            html.companyInfo.style.display = 'block'
        } else {
            html.companyInfo.style.display = 'none'
        }
    })

    html.submit.addEventListener('click', (e) => {
        e.preventDefault()
        const checked = html.companyCheck.checked
        let oneInvalid = false

        Object.entries(inputFields).forEach(([name, valueField]) => {
            const valid = validate[name](valueField.value, checked)

            changeBorder(valid, inputFields[name])

            if (! valid) oneInvalid = true
        })

        if (oneInvalid) {
            html.validDiv.style.display = 'none'
        } else {
            html.validDiv.style.display = 'block'
        }
    })
}
//
console.log("------------");
//
function validate() {
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const companyNumber = document.getElementById('companyNumber');
    const company = document.getElementById('company');
    const errFields = [];

    company.addEventListener('change', () => {
        document.getElementById('companyInfo').style.display =
            company.checked ? 'block' : 'none';
    });

    document.getElementById('submit')
        .addEventListener('click', validateFields)

    function isCorrectUserName(username) {
        let userNamePattern = /^[a-zA-Z0-9]{3,20}$/gm;
        return userNamePattern.test(username);
    }

    function isCorrectEmail(email) {
        const emailPattern = /^\w+@\w*\.+/;
        return emailPattern.test(email);
    }

    function isCorrectPassword(password) {
        let regExp = /^\w{5,15}$/;
        return regExp.test(password) && password.localeCompare(confirmPassword.value) === 0;
    }

    function isCorrectCompanyInfo(companyNumber) {
        let regExp = /^[0-9]{4}$/;
        return regExp.test(companyNumber);
    }

    function validateFields(ev) {
        ev.preventDefault();

        if (!isCorrectUserName(username.value)) {
            errFields.push(username);
        }

        if (!isCorrectEmail(email.value)) {
            errFields.push(email);
        }

        if (!isCorrectPassword(password.value) || password.value !== confirmPassword.value) {
            errFields.push(password);
            errFields.push(confirmPassword);
        }

        if (company.checked) {
            if (!isCorrectCompanyInfo(companyNumber.value)) {
                errFields.push(companyNumber);
            }
        }

        errFields.forEach(field => field.style.borderColor = 'red');

        document.getElementById('valid').style.display =
            errFields.length ? 'none' : 'block';
    }
}