// validation.js

// 이메일 검사
export function validateEmail(value) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const v = (value ?? '').trim();

  if (!v) {
    return { valid: false, message: '이메일을 입력해주세요.' };
  } else if (!emailRegex.test(value)) {
    return { valid: false, message: '잘못된 이메일 형식입니다.' };
  } else {
    return { valid: true, message: '' };
  }
}

// 비밀번호 검사
export function validatePassword(value) {
  const v = (value ?? '').trim();

  if (!v) {
    return { valid: false, message: '비밀번호를 입력해주세요.' };
  } else if (value.length < 8) {
    return { valid: false, message: '비밀번호를 8자 이상 입력해주세요.' };
  } else {
    return { valid: true, message: '' };
  }
}

// 닉네임 검사
export function validateNickname(value) {
  const v = (value ?? '').trim();

  if (!v) {
    return { valid: false, message: '닉네임을 입력해주세요.' };
  } else {
    return { valid: true, message: '' };
  }
}

// 비밀번호 일치 검사
export function validatePasswordVerify(value, originalPassword) {
  const v = (value ?? '').trim();
  
  if (!v) {
    return { valid: false, message: '비밀번호 확인을 입력해주세요.' };
  } else if (value !== originalPassword) {
    return { valid: false, message: '비밀번호가 일치하지 않습니다.' };
  } else {
    return { valid: true, message: '' };
  }
}