function validate() {
    //take checkbox element and add eventListener
    const checkboxElement = document.getElementById('company');
    const companyInfoElement = document.getElementById('companyInfo');

    checkboxElement.addEventListener('change', () => {
        if (checkboxElement.checked) {
            companyInfoElement.style.display = 'block';
        } else {
            companyInfoElement.style.display = 'none';
        }
    });

    //take submit button element and add eventListener
    const submitButtonElement = document.getElementById('submit');
    submitButtonElement.addEventListener('click', submit);

    function submit(event) {
        event.preventDefault();

        let usernameIsValid = false;
        let emailIsValid = false;
        let passwordIsValid = false;
        let confirmPasswordIsValid = false;
        let companyNumberIsValid = false;

        //take field with id valid
        const validDivElement = document.getElementById('valid');

        //take username input element and check if its value is valid
        const usernameInputElement = document.getElementById('username');
        const usernameRegex = /^[A-Za-z0-9]{3,20}$/;

        if (usernameRegex.test(usernameInputElement.value)) {
            usernameIsValid = true;
        }

        //take email input element and check if its value is valid
        const emailInputElement = document.getElementById('email');
        const emailRegex = /^.*@.*\..*$/;

        if (emailRegex.test(emailInputElement.value)) {
            emailIsValid = true;
        }

        //take password and confirm-password elements and check if their values are valid
        const passwordInputElement = document.getElementById('password');
        const confirmPasswordInputElement = document.getElementById('confirm-password');
        const passwordRegex = /^[\w]{5,15}$/;

        if (passwordRegex.test(passwordInputElement.value) && passwordInputElement.value === confirmPasswordInputElement.value) {
            passwordIsValid = true;
            confirmPasswordIsValid = true;
        }

        //take company number input and check if company number's value is valid
        const companyNumberInputElement = document.getElementById('companyNumber');
        const companyNumberRegex = /^[0-9]{4}$/;

        if (checkboxElement.checked) {
            if (companyNumberRegex.test(companyNumberInputElement.value)) {
                companyNumberIsValid = true;
            }
        } else {
            companyNumberIsValid = true;
        }

        if (usernameIsValid && emailIsValid && passwordIsValid && confirmPasswordIsValid && companyNumberIsValid) {
            validDivElement.style.display = 'block';
        } else {
            validDivElement.style.display = 'none';
        }

        if (!usernameIsValid) {
            usernameInputElement.style.borderColor = 'red';
        } else {
            usernameInputElement.style.border = 'none';
        }

        if (!emailIsValid) {
            emailInputElement.style.borderColor = 'red';
        } else {
            emailInputElement.style.border = 'none';
        }

        if (!passwordIsValid) {
            passwordInputElement.style.borderColor = 'red';
        } else {
            passwordInputElement.style.border = 'none';
        }

        if (!confirmPasswordIsValid) {
            confirmPasswordInputElement.style.borderColor = 'red';
        } else {
            confirmPasswordInputElement.style.border = 'none';
        }

        if (!companyNumberIsValid) {
            companyNumberInputElement.style.borderColor = 'red';
        } else {
            companyNumberInputElement.style.border = 'none';
        }
    }
}




function validate() {

    document.getElementById('submit').addEventListener('click', onClick);
    // добавяме слушател при клик на бутона Събмит

    let companyCheckBox = document.getElementById('company');
    // взимаме по ИД чек-бокса

    companyCheckBox.addEventListener('change', () => {
        // ако чек-бокса се промени
        let companyInfo = document.getElementById('companyInfo');
        if (companyCheckBox.checked === false) {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block'
            // при чекнат чекбокс допълнителната информация за  компанията да се появи
        }

    });

    function onClick(event) {
        // при клик на бутона Събмит да се изпълни функцията
        event.preventDefault();
        // слагаме ПревентДефолт за да не рефрещне страницата

        let invalidInputFields = [];
        // в масив ще пушваме всички невалидни инпут полета

        let usernameInput = document.getElementById('username');
        let usernameValidator = /^[a-zA-Z0-9]{3,20}$/g;

        if (!usernameValidator.test(usernameInput.value)) {
            // ако въведения юзернейм не отговаря на паретна 
            invalidInputFields.push(usernameInput);
        }


        let emailInput = document.getElementById('email');
        let emailValidator = /^.*@.*\..*$/g;
        //let emailValidator = /^[a-z]+@[a-z]+\.[a-z]{0,3}/gm;
        if (!emailValidator.test(emailInput.value)) {
            invalidInputFields.push(emailInput);
        }


        let passwordInput = document.getElementById('password');
        let confirmPasswordInput = document.getElementById('confirm-password');
        // паролите в 2те полета трябда да са еднакви и да отговарят на патерна
        let passwordValivator = /^[a-z0-9\_]{5,15}$/gm; // (/^[\w]{5,15}$/g; и двата патерна минават)
        if (!passwordValivator.test(passwordInput.value) || passwordInput.value !== confirmPasswordInput.value) {
            invalidInputFields.push(passwordInput);
            invalidInputFields.push(confirmPasswordInput);
        }

        if (companyCheckBox.checked) {
            // ако чекбокса е чекнат можем да въведем НОМЕР 
            let companyNumber = document.getElementById('companyNumber');
            if (companyNumber.value < 1000 || companyNumber.value > 9999) {
                // ако Номера е между 1000 и 9999 = валиден
                invalidInputFields.push(companyNumber)
                // ако ли не добавяме полето към масива с невалидни полета
            }
        }

        invalidInputFields.forEach(input => (input.style.borderColor = 'red'));
        // всеки невалиден елемент от масива го ограждаме в червено
        let validLine = document.getElementById('valid');
        invalidInputFields.length === 0 ? validLine.style.display = 'block' : validLine.style.display = 'none'
    }    // ако всички полета са валидни. т.е.дължината на масива с невалидни полета = 0, показваме със стайл.дисплей Валид-поле

}