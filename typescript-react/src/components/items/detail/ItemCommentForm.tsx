import { useState, type ChangeEvent } from "react";
import {
  CommentForm,
  CommentFormButton,
  CommentFormTextarea,
  CommentFormTitle,
} from "@/styles/ItemCommentStyles";

function ItemCommentForm() {
  const [content, setContent] = useState("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setContent(value);
  };

  return (
    <div>
      <CommentFormTitle>문의하기</CommentFormTitle>
      <CommentForm>
        <CommentFormTextarea
          onChange={handleChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <CommentFormButton
          className="button defaultButton"
          disabled={!content.trim()}
        >
          등록
        </CommentFormButton>
      </CommentForm>
    </div>
  );
}

export default ItemCommentForm;
