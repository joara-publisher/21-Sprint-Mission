import { useId, useState } from "react";
import {
  Controller,
  type Control,
  type UseFormHandleSubmit,
  type UseFormReset,
} from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import Button from "@/components/Button";
import { type CommentType, type CommentUpdateValues } from "@/types/comment";
import {
  CommentMenuButton,
  CommentContent,
  CommentDate,
  CommentProfileImg,
  CommentNickname,
  CommentNicknameWrap,
  CommentProfileWrap,
  CommentOptionsMenu,
  CommentMenu,
  CommentOption,
  CommentItem,
  CommentTextarea,
  CommentUpdateMenu,
} from "@/styles/ItemCommentStyles";
import { getRelativeTime } from "@/utils/time";
import profileDefaultImg from "@/assets/images/profile_default.png";

interface FormPropsContent {
  control: Control<CommentUpdateValues>;
  isValid: boolean;
  reset: UseFormReset<CommentUpdateValues>;
  onFormSubmit: UseFormHandleSubmit<CommentUpdateValues>;
  onUpdateComment: (commentId: number, data: CommentUpdateValues) => void;
  onDeleteComment: (commentId: number) => void;
}

interface commentItemProps {
  comment: CommentType;
  formProps: FormPropsContent;
}

function ItemCommentItem({ comment, formProps }: commentItemProps) {
  const { user } = useAuth();
  const id = useId();
  const {
    control,
    isValid,
    reset,
    onFormSubmit,
    onUpdateComment,
    onDeleteComment,
  } = formProps;
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <CommentItem>
      {isEditing ? (
        <form
          onSubmit={onFormSubmit(async (data: CommentUpdateValues) => {
            onUpdateComment(comment.id, data);
            setIsEditing(false);
          })}
        >
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <CommentTextarea
                id={id}
                {...field}
                placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
              />
            )}
          />
          <CommentUpdateMenu>
            <Button className="button ghost">취소</Button>
            <Button
              className="button defaultButton"
              type="submit"
              disabled={!isValid}
            >
              수정완료
            </Button>
          </CommentUpdateMenu>
        </form>
      ) : (
        <CommentContent>{comment.content}</CommentContent>
      )}

      {user?.id === comment.writer.id && !isEditing && (
        <CommentMenu>
          <CommentMenuButton onClick={() => setIsToggleOpen((prev) => !prev)} />
          <CommentOptionsMenu className={`${isToggleOpen ? "active" : ""}`}>
            <CommentOption
              onClick={() => {
                setIsEditing(true);
                setIsToggleOpen(false);
                reset({
                  content: comment.content,
                });
              }}
            >
              수정하기
            </CommentOption>
            <CommentOption
              onClick={() => {
                onDeleteComment(comment.id);
                setIsToggleOpen(false);
              }}
            >
              삭제하기
            </CommentOption>
          </CommentOptionsMenu>
        </CommentMenu>
      )}
      <CommentProfileWrap>
        <CommentProfileImg
          src={comment.writer.image || profileDefaultImg}
          alt={`${comment.writer.nickname} 이미지`}
        />
        <CommentNicknameWrap>
          <CommentNickname>{comment.writer.nickname}</CommentNickname>
          <CommentDate>{getRelativeTime(comment.updatedAt)}</CommentDate>
        </CommentNicknameWrap>
      </CommentProfileWrap>
    </CommentItem>
  );
}

export default ItemCommentItem;
