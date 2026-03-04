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

interface FormPropsContent {
  control: Control<CommentUpdateValues>;
  isValid: boolean;
  reset: UseFormReset<CommentUpdateValues>;
  onFormSubmit: UseFormHandleSubmit<CommentUpdateValues>;
  onUpdateComment: (commentId: number, data: CommentUpdateValues) => void;
  onDeleteComment: (commentId: number) => void;
}

interface commentListProps {
  list: CommentType[];
  formProps: FormPropsContent;
}

function ItemCommentList({ list, formProps }: commentListProps) {
  return (
    <div>
      {list.length > 0 ? (
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
