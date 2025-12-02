import { validateEmail, validatePassword, validateNickname, validatePasswordVerify } from './validation.js';

// 공통 에러 표시 함수
function showError(element, message) {
  const errorInput = element.closest('input');
  errorInput.classList.add('error');
  const errorMessage = element.closest('.input_wrap').querySelector('.error_message');
  errorMessage.textContent = message;
  errorMessage.classList.add('active');
}

function hideError(element) {
  const errorInput = element.closest('input');
  errorInput.classList.remove('error');
  const errorMessage = element.closest('.input_wrap').querySelector('.error_message');
  errorMessage.classList.remove('active');
  errorMessage.textContent = '';
}

const signinForm = document.querySelector('#formSignin');

if(signinForm) {
  // signin 로그인 페이지
  const signinEmail = signinForm.querySelector('#userEmail');
  const signinPassword = signinForm.querySelector('#userPassword');
  const signinFormBtn = signinForm.querySelector('.signin_btn');
  
  let isEmailValid = false;
  let isPasswordValid = false;
  
  signinEmail.addEventListener('focusout', (e) => {
    const { valid, message } = validateEmail(e.target.value);
    
    if (!valid) {
      showError(e.target, message);
    } else {
       hideError(e.target);
    }
    isEmailValid = valid;
    checkFormValidity();
  });
  
  signinPassword.addEventListener('focusout', (e) => {
    const { valid, message } = validatePassword(e.target.value);
    
    if (!valid) {
      showError(e.target, message);
    } else {
       hideError(e.target);
    }
    isPasswordValid = valid;
    checkFormValidity();
  });
  
  // 로그인 폼 유효성 검사 체크
  function checkFormValidity() {
    if (isEmailValid && isPasswordValid) toggleButtonState(signinFormBtn, true);
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
  const signupPassword = signupForm.querySelector('#userPassword');
  const signupPasswordVerify = signupForm.querySelector('#userPasswordVerify');
  const signupFormBtn = signupForm.querySelector('.signup_btn');
  
  let isEmailValid = false;
  let isNicknameValid = false;
  let isPasswordValid = false;
  let isPasswordValidVerify = false;
  
  signupEmail.addEventListener('focusout', (e) => {    
    const { valid, message } = validateEmail(e.target.value);
    
    if (!valid) {
      showError(e.target, message);
    } else {
       hideError(e.target);
    }
    isEmailValid = valid;
    checkFormValidity();
  });
  
  signupNickname.addEventListener('focusout', (e) => {
    const { valid, message } = validateNickname(e.target.value);
    
    if (!valid) {
      showError(e.target, message);
    } else {
       hideError(e.target);
    }
    isNicknameValid = valid;
    checkFormValidity();
  });
  
  signupPassword.addEventListener('focusout', (e) => {
    const { valid, message } = validatePassword(e.target.value);
    
    if (!valid) {
      showError(e.target, message);
    } else  {
      hideError(e.target);
    }
    
    // 비밀번호 확인을 먼저 입력하거나 비밀번호를 수정할 경우
    if(signupPasswordVerify.value !== '') {
      const { valid, message } = validatePasswordVerify(signupPasswordVerify.value, e.target.value);
      
      if(!valid) {
        showError(signupPasswordVerify, message);
      } else {
        hideError(signupPasswordVerify);
      }
      isPasswordValidVerify = valid;
    }
    
    isPasswordValid = valid;
    checkFormValidity();
  });
  
  signupPasswordVerify.addEventListener('focusout', (e) => {
    const { valid, message } = validatePasswordVerify(e.target.value, signupPassword.value);
    
    if (!valid) {
      showError(e.target, message);
    } 
    else {
       hideError(e.target);
    }
    isPasswordValidVerify = valid;
    checkFormValidity();
  });
  
  // 회원가입 폼 유효성 검사 체크
  function checkFormValidity() {
    if (isEmailValid && isNicknameValid && isPasswordValid && isPasswordValidVerify) {
      toggleButtonState(signupFormBtn, true);
    }
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