import { useState } from "react";
import {
  CommentMenuButton,
  CommentContent,
  CommentDate,
  CommentProfileImg,
  CommentItem,
  CommentNickname,
  CommentNicknameWrap,
  CommentProfileWrap,
  CommentOptionsMenu,
  CommentMenu,
  CommentOption,
  CommentEmptyWrap,
  CommentEmpty,
  CommentWrap,
  CommentTextarea,
  CommentUpdateMenu,
  CommentEmptyImg,
} from "@/styles/ItemCommentStyles";
import profileDefaultImg from "@/assets/images/profile_default.png";
import commentEmptyImg from "@/assets/images/comment_empty.png";
import type { CommentType } from "@/types/comment";
import Button from "@/components/Button";

interface commentListProps {
  list: CommentType[];
}

function getRelativeTime(updatedAt: string) {
  const now = new Date();
  const updatedDate = new Date(updatedAt);
  const seconds = Math.floor((now.getTime() - updatedDate.getTime()) / 1000);

  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + "년 전";
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + "개월 전";
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + "일 전";
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + "시간 전";
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + "분 전";
  }
  return Math.floor(seconds) + "초 전";
}

function ItemCommentList({ list }: commentListProps) {
  const [openMenuId, setOpenMenuId] = useState<number | null>(null);
  const [editingCommentId, setEditingCommentId] = useState<number | null>(null);

  const toggleDropdown = (id: number) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const setActiveCommentId = (id: number) => {
    setEditingCommentId(id);
    setOpenMenuId(null);
  };

  const isDeleteComment = (id: number) => {
    console.log("삭제할 댓글 번호:" + id);
  };

  const isUpdateComment = (id: number) => {
    console.log("수정할 댓글 번호:" + id);
  };

  return (
    <div>
      {list.length > 0 ? (
        <CommentWrap>
          {list.map((item, index) => (
            <CommentItem key={index}>
              {editingCommentId === item.id ? (
                <CommentTextarea value={item.content} />
              ) : (
                <CommentContent>{item.content}</CommentContent>
              )}
              {editingCommentId !== item.id ? (
                <CommentMenu>
                  <CommentMenuButton onClick={() => toggleDropdown(item.id)} />
                  <CommentOptionsMenu
                    className={`${openMenuId === item.id ? "active" : ""}`}
                  >
                    <CommentOption onClick={() => setActiveCommentId(item.id)}>
                      수정하기
                    </CommentOption>
                    <CommentOption onClick={() => isDeleteComment(item.id)}>
                      삭제하기
                    </CommentOption>
                  </CommentOptionsMenu>
                </CommentMenu>
              ) : (
                <CommentUpdateMenu>
                  <Button className="button ghost">취소</Button>
                  <Button
                    className="button defaultButton"
                    onClick={() => isUpdateComment(item.id)}
                  >
                    수정완료
                  </Button>
                </CommentUpdateMenu>
              )}
              <CommentProfileWrap>
                <CommentProfileImg
                  src={item.writer.image || profileDefaultImg}
                  alt={`${item.writer.nickname} 이미지`}
                />
                <CommentNicknameWrap>
                  <CommentNickname>{item.writer.nickname}</CommentNickname>
                  <CommentDate>{getRelativeTime(item.updatedAt)}</CommentDate>
                </CommentNicknameWrap>
              </CommentProfileWrap>
            </CommentItem>
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
