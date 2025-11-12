// validation.js

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

// 이메일 검사
export function validateEmail(input) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const value = input.value.trim();

  if (!value) {
    showError(input, '이메일을 입력해주세요.');
    return false;
  } else if (!emailRegex.test(value)) {
    showError(input, '잘못된 이메일입니다.');
    return false;
  } else {
    hideError(input);
    return true;
  }
}

// 비밀번호 검사
export function validatePassword(input) {
  const value = input.value.trim();

  if (!value) {
    showError(input, '비밀번호를 입력해주세요.');
    return false;
  } else if (value.length < 8) {
    showError(input, '비밀번호를 8자 이상 입력해주세요.');
    return false;
  } else {
    hideError(input);
    return true;
  }
}

// 닉네임 검사
export function validateNickname(input) {
  const value = input.value.trim();

  if (!value) {
    showError(input, '닉네임을 입력해주세요.');
    return false;
  } else {
    hideError(input);
    return true;
  }
}

// 비밀번호 일치 검사
export function validatePasswordVerify(input, originalPassword) {
  const value = input.value.trim();
  
  if (!value) {
    showError(input, '비밀번호 확인을 입력해주세요.');
    return false;
  } else if (value != originalPassword) {
    showError(input, '비밀번호가 일치하지 않습니다.');
    return false;
  } else {
    hideError(input);
    return true;
  }
}