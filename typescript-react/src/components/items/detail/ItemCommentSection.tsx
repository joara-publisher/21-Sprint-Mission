import { CommentSectionWrap } from "@/styles/ItemCommentStyles";
import ItemCommentForm from "./ItemCommentForm";
import ItemCommentList from "./ItemCommentList";
import useItemComment from "@/hooks/useItemComment.ts";

function ItemCommentSection() {
  const { commentListProps, commentAddFormProps, commentUpdateFormProps } =
    useItemComment();

  return (
    <CommentSectionWrap>
      <ItemCommentForm formProps={commentAddFormProps} />
      <ItemCommentList
        listProps={commentListProps}
        formProps={commentUpdateFormProps}
      />
    </CommentSectionWrap>
  );
}

export default ItemCommentSection;
