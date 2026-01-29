import { useState } from "react";

interface FormFields {
  email: string;
  nickname: string;
  password: string;
  passwordVerify: string;
}

type FieldName = keyof FormFields; // UserAuthFormValues 모든 키를 유니온 타입으로 만들어 줌
type FormErrors = Record<FieldName, string>; // FieldName에 들어있는 값들(email, nickname 등)을 "키(Key)"로 사용하고, 그 값(Value)의 타입은 전부 string으로 정하겠다.

function useAuthForm(requiredFields: FieldName[]) {
  const [values, setValues] = useState<FormFields>({
    email: "",
    nickname: "",
    password: "",
    passwordVerify: "",
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: "",
    nickname: "",
    password: "",
    passwordVerify: "",
  });

  const handleChange = (name: FieldName, value: string) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  const validateField = (name: FieldName, value: string) => {
    switch (name) {
      case "email":
        if (!value) return "이메일을 입력해주세요.";
        if (!emailRegex.test(value)) return "잘못된 이메일 형식입니다.";
        return "";

      case "nickname":
        if (!value) return "닉네임을 입력해주세요.";
        return "";

      case "password":
        if (!value) return "비밀번호를 입력해주세요.";
        if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
        return "";

      case "passwordVerify":
        if (!value) return "비밀번호 확인을 입력해주세요.";
        if (value !== values.password) return "비밀번호가 일치하지 않습니다.";
        return "";

      default:
        return "";
    }
  };

  const handleBlur = (name: FieldName) => {
    const error = validateField(name, values[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const isFormValid = requiredFields.every(
    (key) => values[key]?.trim() !== "" && errors[key] === ""
  );

  return {
    errors,
    handleChange,
    handleBlur,
    isFormValid,
  };
}

export default useAuthForm;
