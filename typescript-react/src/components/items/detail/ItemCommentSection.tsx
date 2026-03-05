import { CommentSectionWrap } from "@/styles/ItemCommentStyles";
import ItemCommentForm from "./ItemCommentForm";
import ItemCommentList from "./ItemCommentList";
import useItemComment from "@/hooks/useItemComment.ts";

function ItemCommentSection() {
  const { listProps, addFormProps, updateFormProps } = useItemComment();

  return (
    <CommentSectionWrap>
      <ItemCommentForm formProps={addFormProps} />
      <ItemCommentList listProps={listProps} formProps={updateFormProps} />
    </CommentSectionWrap>
  );
}

export default ItemCommentSection;
