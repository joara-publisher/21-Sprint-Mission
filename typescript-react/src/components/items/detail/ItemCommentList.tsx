import type { CommentType, CommentUpdateValues } from "@/types/comment";
import ItemCommentItem from "./ItemCommentItem";
import {
  CommentEmptyWrap,
  CommentEmpty,
  CommentWrap,
  CommentEmptyImg,
} from "@/styles/ItemCommentStyles";
import commentEmptyImg from "@/assets/images/comment_empty.png";
import type {
  Control,
  UseFormHandleSubmit,
  UseFormReset,
} from "react-hook-form";
import type { AxiosError } from "axios";
import axios from "axios";

interface ListProps {
  list: CommentType[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | AxiosError | null;
}

interface FormPropsContent {
  control: Control<CommentUpdateValues>;
  isValid: boolean;
  reset: UseFormReset<CommentUpdateValues>;
  onFormSubmit: UseFormHandleSubmit<CommentUpdateValues>;
  onUpdateComment: (commentId: number, data: CommentUpdateValues) => void;
  onDeleteComment: (commentId: number) => void;
}

interface commentListProps {
  listProps: ListProps;
  formProps: FormPropsContent;
}

function ItemCommentList({ listProps, formProps }: commentListProps) {
  const { list, isLoading, isError, error } = listProps;

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "댓글을 불러올 수 없습니다.";
      return <div>{message}</div>;
    }
    return <div>알 수 없는 에러가 발생했습니다.</div>;
  }

  return (
    <div>
      {list && list.length > 0 ? (
        <CommentWrap>
          {list.map((comment, index) => (
            <ItemCommentItem
              key={index}
              comment={comment}
              formProps={formProps}
            />
          ))}
        </CommentWrap>
      ) : (
        <CommentEmptyWrap>
          <CommentEmpty>
            <CommentEmptyImg src={commentEmptyImg} alt="문의가 없을때 이미지" />
            아직 문의가 없어요
          </CommentEmpty>
        </CommentEmptyWrap>
      )}
    </div>
  );
}

export default ItemCommentList;
