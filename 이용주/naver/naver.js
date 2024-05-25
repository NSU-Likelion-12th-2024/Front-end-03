var errorList = document.querySelector('.error');
var errorList2 = document.querySelector('.error2');

function createErrorMessage(text, className) {
    var errorMessage = document.createElement('li');
    errorMessage.textContent = text;
    errorMessage.classList.add(className);
    return errorMessage;
}

function validateInput(inputElement, pattern, errorMessageText, errorClassName, errorList) {
    var listItem = inputElement.parentElement;
    var inputValue = inputElement.value;

    var existingError = document.querySelector('.' + errorClassName);
    if (existingError) existingError.remove();

    if (!pattern.test(inputValue)) {
        var errorMessage = createErrorMessage(errorMessageText, errorClassName);
        errorList.appendChild(errorMessage);
        listItem.style.border = '2px solid red';
        inputElement.style.color = 'red';
        listItem.querySelector('.icon').style.color = 'red';
    } else {
        listItem.style.border = '2px solid rgb(84, 83, 83)';
        inputElement.style.color = 'white';
        listItem.querySelector('.icon').style.color = 'rgb(84, 83, 83)';
        listItem.style.border = '2px solid green';
    }
}

var idInput = document.querySelector('.id');
idInput.addEventListener('input', function () {
    var idPattern = /^[a-z0-9_-]{5,20}$/;
    var idErrorMessage = '*아이디: 5~20자의 영문 소문자, 숫자와 특수기호(_),(-)만 사용 가능합니다.';
    validateInput(idInput, idPattern, idErrorMessage, 'error-id', errorList);
});

var pwdInput = document.querySelector('.pwd');
pwdInput.addEventListener('input', function () {
    var pwdPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    var pwdErrorMessage = '*비밀번호: 8~16자의 영문 대/소문자, 숫자와 특수문자를 사용해야 합니다.';
    validateInput(pwdInput, pwdPattern, pwdErrorMessage, 'error-pwd', errorList);
});

var mailInput = document.querySelector('.mail');
mailInput.addEventListener('input', function () {
    var mailPattern = /.+@.+/;
    var mailErrorMessage = '*이메일: 올바른 이메일 주소를 입력해 주세요.';
    validateInput(mailInput, mailPattern, mailErrorMessage, 'error-mail', errorList);
});

var nameInput = document.querySelector('.name');
nameInput.addEventListener('input', function () {
    var namePattern = /^[a-zA-Z가-힣]+$/;
    var nameErrorMessage = '*이름: 한글, 영문 대/소문자만 사용 가능합니다.';
    validateInput(nameInput, namePattern, nameErrorMessage, 'error-name', errorList2);
});

var birthInput = document.querySelector('.birth');
birthInput.addEventListener('input', function () {
    var birthPattern = /^\d{8}$/;
    var birthErrorMessage = '*생년월일: 8자리 숫자를 입력해주세요.';
    validateInput(birthInput, birthPattern, birthErrorMessage, 'error-birth', errorList2);
});
var phoneInput = document.querySelector('.phone');
phoneInput.addEventListener('input', function () {
    var phonePattern = /^01[0-9]{8,9}$/;
    var phoneErrorMessage = '*휴대전화번호: 휴대전화번호가 정확한지 확인해 주세요.';
    validateInput(phoneInput, phonePattern, phoneErrorMessage, 'error-phone', errorList2);
});