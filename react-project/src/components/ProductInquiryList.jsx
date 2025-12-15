import { CommentMenuButton, CommentContent, CommentDate, CommentProfileImg, CommentItem, CommentNickname, CommentNicknameWrap, CommentProfileWrap, CommentOptionsMenu, CommentMenu, CommentOption, InquiryEmptyWrap, InquiryEmpty, CommentWrap, CommentTextarea, CommentUpdateMenu } from "../styles/ProductInquiryStyles";
import profileDefaultImg from "../assets/profileDefaultImg.png";
import inquiryEmptyImg from "../assets/inquiryEmpty.png";
import { useState } from "react";
import Button from './Button';

function getRelativeTime (updatedAt) {
  const now = new Date();
  const updatedDate = new Date(updatedAt);
  const seconds = Math.floor((now.getTime() - updatedDate.getTime()) / 1000); // 차이를 초 단위로 계산

  let interval = seconds / 31536000; // 년
  if (interval > 1) {
      return Math.floor(interval) + "년 전";
  }
  interval = seconds / 2592000; // 월 (평균 30일 기준)
  if (interval > 1) {
      return Math.floor(interval) + "개월 전";
  }
  interval = seconds / 86400; // 일 (24시간)
  if (interval > 1) {
      return Math.floor(interval) + "일 전";
  }
  interval = seconds / 3600; // 시간 (60분)
  if (interval > 1) {
      return Math.floor(interval) + "시간 전";
  }
  interval = seconds / 60; // 분 (60초)
  if (interval > 1) {
      return Math.floor(interval) + "분 전";
  }
  return Math.floor(seconds) + "초 전";
}

function ProductInquiryList ({ list }) {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [editingCommentId, setEditingCommentId] = useState(null);
  
  const toggleDropdown = (id) => {
    setOpenMenuId((prev) => prev === id ? null : id);
  }
  
  const setActiveCommentId = (id) => {
    setEditingCommentId(id);
    setOpenMenuId(null);
  }
  
  const isDeleteComment = (id) => {
    console.log("삭제할 댓글 번호:" + id );
  }
  
  const isUpdateComment = (id) => {
    console.log("수정할 댓글 번호:" + id);
  };
  
  return (
    <div>
      {list.length > 0 ? 
        <CommentWrap>
          {list.map((item, index) => (
            <CommentItem key={index}>
              {editingCommentId === item.id ? 
                <CommentTextarea value={item.content} /> 
                : 
                <CommentContent>{item.content}</CommentContent>
              }
              {editingCommentId !== item.id ? 
                <CommentMenu>
                  <CommentMenuButton onClick={() => toggleDropdown(item.id)} />
                  <CommentOptionsMenu className={`${openMenuId === item.id ? 'active' : ''}`}>
                    <CommentOption onClick={() => setActiveCommentId(item.id)}>수정하기</CommentOption>
                    <CommentOption onClick={() => isDeleteComment(item.id)}>삭제하기</CommentOption>
                  </CommentOptionsMenu>
                </CommentMenu>
              : 
                <CommentUpdateMenu>
                  <Button className="button ghost" onClick={() => setActiveCommentId(null)}>취소</Button>
                  <Button className="button defaultButton" onClick={() => isUpdateComment(item.id)}>수정완료</Button>
                </CommentUpdateMenu>
              }
              <CommentProfileWrap>
                <CommentProfileImg src={item.writer.image || profileDefaultImg} alt={`${item.writer.nickname} 이미지`} />
                <CommentNicknameWrap>
                  <CommentNickname>{item.writer.nickname}</CommentNickname>
                  <CommentDate>{getRelativeTime(item.updatedAt)}</CommentDate>
                </CommentNicknameWrap>
              </CommentProfileWrap>
            </CommentItem>
          ))}
      </CommentWrap>
      :  
      <InquiryEmptyWrap>
        <InquiryEmpty>
          <img src={inquiryEmptyImg} alt="문의가 없을때 이미지" />
          아직 문의가 없어요
        </InquiryEmpty>
      </InquiryEmptyWrap>
      }
    </div>
  )
}

export default ProductInquiryList;