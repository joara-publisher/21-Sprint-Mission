import { validateEmail, validatePassword, validateNickname, validatePasswordVerify } from './validation.js';


const signinForm = document.querySelector('#formSignin');

if(signinForm) {
  // signin 로그인 페이지
  const signinEmail = signinForm.querySelector('#userEmail');
  const signinPwd = signinForm.querySelector('#userPwd');
  const signinFormBtn = signinForm.querySelector('.signin_btn');
  
  let emailValid = false;
  let pwdValid = false;
  
  signinEmail.addEventListener('focusout', (e) => {
    emailValid = validateEmail(e.target);
    checkFormValidity();
  });
  
  signinPwd.addEventListener('focusout', (e) => {
    pwdValid = validatePassword(e.target);
    checkFormValidity();
  });
  
  // 로그인 폼 유효성 검사 체크
  function checkFormValidity() {
    if (emailValid && pwdValid) toggleButtonState(signinFormBtn, true);
    else toggleButtonState(signinFormBtn, false);
  }
  
  // 클릭 이벤트는 한 번만 등록
  signinFormBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (signinFormBtn.classList.contains('active')) {
      window.location.href = '/items';
    }
  });
}

const signupForm = document.querySelector('#formSignup');

if(signupForm) {
  // signup 회원가입 페이지
  const signupEmail = signupForm.querySelector('#userEmail');
  const signupNickname = signupForm.querySelector('#userNickname');
  const signupPwd = signupForm.querySelector('#userPwd');
  const signupPwdVerify = signupForm.querySelector('#userPwdVerify');
  const signupFormBtn = signupForm.querySelector('.signup_btn');
  
  let emailValid = false;
  let nicknameValid = false;
  let pwdValid = false;
  let pwdValidVerify = false;
  
  signupEmail.addEventListener('focusout', (e) => {
    emailValid = validateEmail(e.target);
    checkFormValidity();
  });
  
  signupNickname.addEventListener('focusout', (e) => {
    nicknameValid = validateNickname(e.target);
    checkFormValidity();
  });
  
  signupPwd.addEventListener('focusout', (e) => {
    pwdValid = validatePassword(e.target);
    // 비밀번호 확인 -> 비밀번호 순으로 입력하는 경우
    if(pwdValid && signupPwdVerify.value != '') pwdValidVerify = validatePasswordVerify(signupPwdVerify, e.target.value);
    checkFormValidity();
  });
  
  signupPwdVerify.addEventListener('focusout', (e) => {
    pwdValidVerify = validatePasswordVerify(e.target, signupPwd.value);
    // 나중에 비밀번호를 수정하는 경우
    if (pwdValidVerify && signupPwd.value !== signupPwdVerify.value) pwdValidVerify = validatePasswordVerify(e.target, signupPwd.value);
    checkFormValidity();
  });
  
  // 회원가입 폼 유효성 검사 체크
  function checkFormValidity() {
    if (emailValid && nicknameValid && pwdValid && pwdValidVerify) toggleButtonState(signupFormBtn, true);
    else toggleButtonState(signupFormBtn, false);
  }
  
  // 클릭 이벤트는 한 번만 등록
  signupFormBtn.addEventListener('click', (event) => {
    event.preventDefault();
    if (signupFormBtn.classList.contains('active')) {
      window.location.href = '/signin';
    }
  });
}

// 로그인 & 회원가입 버튼 상태 토글
function toggleButtonState(button, isActive) {
  if (isActive) {
    button.removeAttribute('disabled');
    button.classList.add('active');
  } else {
    button.setAttribute('disabled', 'true');
    button.classList.remove('active');
  }
}

// 비밀번호 보안 표시 토글
document.querySelectorAll('.eye_btn').forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if(!e.target.classList.contains('active')) {
      e.target.classList.add('active');
      e.target.previousElementSibling.setAttribute('type', 'text');
    } else {
      e.target.classList.remove('active');
      e.target.previousElementSibling.setAttribute('type', 'password');
    }
  });
});