import {
  Controller,
  type Control,
  type UseFormHandleSubmit,
} from "react-hook-form";
import {
  CommentForm,
  CommentFormButton,
  CommentFormTextarea,
  CommentFormTitle,
} from "@/styles/ItemCommentStyles";
import type { ItemCommentValues } from "@/types/comment";
import { useId } from "react";

interface FormPropsContent {
  control: Control<ItemCommentValues>;
  isValid: boolean;
  onFormSubmit: UseFormHandleSubmit<ItemCommentValues>;
  onSubmitComment: (data: ItemCommentValues) => void;
}

interface FormProps {
  formProps: FormPropsContent;
}

function ItemCommentForm({ formProps }: FormProps) {
  const { control, isValid, onFormSubmit, onSubmitComment } = formProps;
  const id = useId();

  return (
    <div>
      <CommentFormTitle>문의하기</CommentFormTitle>
      <CommentForm onSubmit={onFormSubmit(onSubmitComment)}>
        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <CommentFormTextarea
              {...field}
              id={id}
              placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            />
          )}
        />
        <CommentFormButton className="button defaultButton" disabled={!isValid}>
          등록
        </CommentFormButton>
      </CommentForm>
    </div>
  );
}

export default ItemCommentForm;
