import {useRef, useState } from "react";
import { Input, Label } from "../styles/FormCommonStyles";
import FormErrorMessage from "./FormErrorMessage";
import tagDeleteIcon from "../assets/formDeleteIcon.svg";
import { TagList as commonTagList, Tag } from "../styles/ProductCommonStyles";
import styled from "styled-components";

function Tags ({ tags, addTag, deleteTag }) {
  const [iserrMsg, setIsErrMsg] = useState(false);
  const inputRef = useRef();
  
  const inputTag = () => {
    if(iserrMsg) setIsErrMsg(false);
  }
  
  const handleAddTag = (e) => {
    const value = e.target.value.trim();
  
    // 미완성 한글(초성/중성) Enter 입력 막기
    if (e.key === "Enter" && !/^[가-힣a-zA-Z0-9]+$/.test(value)) {
      return;
    }
    
    // e.nativeEvent.isComposing 는 조합중일때 true 아닐때 false
    if(e.key === 'Enter' && !e.nativeEvent.isComposing) {
      if(tags.includes(value)) {
        setIsErrMsg(true);
      } else {
        addTag(value);
      }
      inputRef.current.value = '';
    }
  }
  
  const handleDeleteTag = (index) => {
    deleteTag(index);
  };
  
  return (
    <>
      <Label htmlFor="tags">태그</Label>
      <Input type="text" name="tags" id="tags" placeholder="태그를 입력해주세요" onChange={inputTag} onKeyDown={handleAddTag} ref={inputRef} />
      <LocalTag>
        {tags.map((tag, index) => (
          <Tag key={index}>
            #{tag}
            <button><img src={tagDeleteIcon} alt="태그 삭제" onClick={() => handleDeleteTag(index)} /></button>
          </Tag>
        ))}
      </LocalTag>
      {iserrMsg && <FormErrorMessage>*같은 태그가 이미 등록되어 있습니다.</FormErrorMessage>}
    </>
  )
}

export default Tags;

const LocalTag = styled(commonTagList)`
  gap: 12px;
  margin-top: 14px;
`;