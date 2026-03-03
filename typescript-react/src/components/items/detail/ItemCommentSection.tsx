import type { CommentType } from "@/types/comment";
import { CommentSectionWrap } from "@/styles/ItemCommentStyles";
import ItemCommentForm from "./ItemCommentForm";
import ItemCommentList from "./ItemCommentList";

interface CommentProps {
  list: CommentType[];
}

function ItemCommentSection({ list }: CommentProps) {
  return (
    <CommentSectionWrap>
      <ItemCommentForm />
      <ItemCommentList list={list} />
    </CommentSectionWrap>
  );
}

export default ItemCommentSection;
