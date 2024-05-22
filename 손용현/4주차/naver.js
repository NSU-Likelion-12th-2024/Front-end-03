const inputPass1 = document.querySelector("#form_id_input");
const inputPass2 = document.querySelector("#form_pass_input");
const inputPass3 = document.querySelector("#form_email_input");
const passIcon1 = document.querySelector(".fa-user");
const passIcon2 = document.querySelector(".fa-lock");
const passIcon3 = document.querySelector(".fa-envelope");
const eyeIcon = document.querySelector(".eyeicon");
const passBorder1 = document.querySelector("#form_id");
const passBorder2 = document.querySelector("#form_pass");
const passBorder3 = document.querySelector("#form_eml");
const formUl1 = document.querySelector("#form_ul1");
const formUl2 = document.querySelector("#form_ul2");
const formUl3 = document.querySelector("#form_ul3");

function createAlertElement() {
  const alert = document.createElement("li");
  alert.style.color = "red";
  return alert;
}

const alertPass1 = createAlertElement();
const alertPass2 = createAlertElement();
const alertPass3 = createAlertElement();

function removeAlert(alertElement) {
  if (alertElement.parentNode) {
    alertElement.parentNode.removeChild(alertElement);
  }
}

function iD_CHECK(event) {
  const regPass = /^(?=.*[0-9]+)[a-zA-Z][a-zA-Z0-9]{5,20}$/g;
  removeAlert(alertPass1);
  if (event.target.value === "") {
    alertPass1.textContent = "아이디: 필수 정보입니다.";
    passIcon1.style.color = "red";
    formUl1.appendChild(alertPass1);
    passBorder1.classList.add("form_alert");
  } else if (!regPass.test(event.target.value)) {
    alertPass1.textContent =
      "아이디: 영문으로 시작하는 5~10자 길이의 영문자, 숫자를 사용해주세요.";
    passIcon1.style.color = "red";
    formUl1.appendChild(alertPass1);
    passBorder1.classList.add("form_alert");
  } else {
    passIcon1.style.color = "#2db400";
    passBorder1.style.borderColor = "#2db400";
    passBorder1.classList.remove("form_alert");
  }
}

function PWD_CHECK(event) {
  const regPass =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  removeAlert(alertPass2);
  if (event.target.value === "") {
    alertPass2.textContent = "비밀번호: 필수 정보입니다.";
    passIcon2.style.color = "red";
    formUl2.appendChild(alertPass2);
    passBorder2.classList.add("form_alert");
  } else if (!regPass.test(event.target.value)) {
    alertPass2.textContent =
      "비밀번호: 8~16자 영문 대/소문자, 숫자, 특수문자를 사용해주세요.";
    passIcon2.style.color = "red";
    formUl2.appendChild(alertPass2);
    passBorder2.classList.add("form_alert");
  } else {
    passIcon2.style.color = "#2db400";
    passBorder2.style.borderColor = "#2db400";
    passBorder2.classList.remove("form_alert");
  }
}

eyeIcon.addEventListener("click", function () {
  if (inputPass2.type === "password") {
    inputPass2.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    inputPass2.type = "password";
    eyeIcon.classList.add("fa-eye-slash");
    eyeIcon.classList.remove("fa-eye");
  }
});

function email_CHECK(event) {
  const regPass =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  removeAlert(alertPass3);
  if (event.target.value === "") {
    passIcon3.style.color = "#2db400";
    passBorder3.style.borderColor = "#2db400";
    passBorder3.classList.remove("form_alert");
  } else if (!regPass.test(event.target.value)) {
    alertPass3.textContent = "이메일: 이메일 주소가 정확한지 확인해 주세요.";
    passIcon3.style.color = "red";
    formUl3.appendChild(alertPass3);
    passBorder3.classList.add("form_alert");
  } else {
    passIcon3.style.color = "#2db400";
    passBorder3.style.borderColor = "#2db400";
    passBorder3.classList.remove("form_alert");
  }
}

inputPass1.addEventListener("blur", iD_CHECK);
inputPass2.addEventListener("blur", PWD_CHECK);
inputPass3.addEventListener("blur", email_CHECK);
