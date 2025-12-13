import { useState } from "react";
import { CommentMenuButton, CommentContent, CommentDate, CommentProfileImg, CommentItem, CommentNickname, CommentNicknameWrap, CommentProfileWrap, CommentOptionsMenu, CommentMenu, CommentOption } from "../styles/ProductInquiryStyles";
import profileDefaultImg from "../assets/profileDefaultImg.png";

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
  
  const toggleDropdown = (id) => {
    setOpenMenuId((prev) => prev === id ? null : id);
  }
  
  return (
    <div>
      {list.map((item, index) => (
        <CommentItem key={index}>
          <CommentContent>{item.content}</CommentContent>
          <CommentProfileWrap>
            <CommentProfileImg src={item.writer.image || profileDefaultImg} alt={`${item.writer.nickname} 이미지`} />
            <CommentNicknameWrap>
              <CommentNickname>{item.writer.nickname}</CommentNickname>
              <CommentDate>{getRelativeTime(item.updatedAt)}</CommentDate>
            </CommentNicknameWrap>
          </CommentProfileWrap>
          <CommentMenu>
            <CommentMenuButton onClick={() => toggleDropdown(item.id)} />
            <CommentOptionsMenu className={`${openMenuId === item.id ? 'active' : ''}`}>
              <CommentOption>수정하기</CommentOption>
              <CommentOption>삭제하기</CommentOption>
            </CommentOptionsMenu>
          </CommentMenu>
        </CommentItem>
      ))}
    </div>
  )
}

export default ProductInquiryList;