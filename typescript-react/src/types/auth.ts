import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import z from "zod";

export interface User {
  id: number;
  nickname: string;
  image: string;
}

export interface AuthInputProps<T extends FieldValues> {
  label: string;
  field: ControllerRenderProps<T, Path<T>>;
  error?: string;
  placeholder: string;
  type?: string;
}

export const signUpSchema = z
  .object({
    email: z
      .string()
      .nonempty("이메일을 입력해주세요.")
      .email("잘못된 이메일 형식입니다."),
    nickname: z.string().nonempty("닉네임을 입력해주세요."),
    password: z
      .string()
      .nonempty("비밀번호를 입력해주세요.")
      .min(8, "비밀번호를 8자 이상 입력해주세요."),
    passwordConfirmation: z.string().nonempty("비밀번호 확인을 입력해주세요."),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordConfirmation"],
  });
export type SignUpValues = z.infer<typeof signUpSchema>;

export const signInSchema = z.object({
  email: z
    .string()
    .nonempty("이메일을 입력해주세요.")
    .email("잘못된 이메일 형식입니다."),
  password: z
    .string()
    .nonempty("비밀번호를 입력해주세요.")
    .min(8, "비밀번호를 8자 이상 입력해주세요."),
});
export type SignInValues = z.infer<typeof signInSchema>;
