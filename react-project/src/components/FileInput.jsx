import { useEffect, useRef, useState } from "react";
import FormErrorMessage from "./FormErrorMessage";
import styled from "styled-components";
import placeholderImg from "../assets/plusIcon.svg";
import imgDeleteIcon from "../assets/formDeleteIcon.svg";

function FileInput () {
  const [file, setFile] = useState('');
  const [preview, setPreview] = useState('');
  const [iserrMsg, setISErrMsg] = useState(false);
  const inputRef = useRef();
  
  const clickAddImage = () => {
    if(file) {
      setISErrMsg(true);
      return;
    }
    
    if(inputRef.current)
      inputRef.current.click();
  };
  
  const addImage = (e) => {
    const changeFile = e.target.files[0];
    setFile(changeFile);
  };
  
  useEffect(() => {    
    if(!file) return;
    
    const objectURL = URL.createObjectURL(file);
    setPreview(objectURL);
    
    return () => {
      URL.revokeObjectURL(objectURL);
    }
  }, [file]);
  
  const deletePreview= () => {
    setFile('');
    setISErrMsg(false);
    if(inputRef.current) {
      inputRef.current.value = ''
    }
  };
  
  return (
    <>
      <label htmlFor="images">상품 이미지</label>
      <input type="file" name="images" id="images" onChange={addImage} ref={inputRef} hidden />
      <ImgWrap>
        <ImgPlaceholder onClick={clickAddImage}>
          <img src={placeholderImg} alt="플러스 아이콘" />
          이미지 등록
        </ImgPlaceholder>
        {preview && 
          <ImgPreview style={{ backgroundImage: `url(${preview})` }}>
            <button onClick={deletePreview}><img src={imgDeleteIcon} alt="이미지 삭제" /></button>
          </ImgPreview>
        }
      </ImgWrap>
      {iserrMsg && <FormErrorMessage>*이미지 등록은 최대 1개까지 가능합니다.</FormErrorMessage>}
    </>
  )
}

export default FileInput;

const ImgWrap = styled.div`
  display: flex;
  gap: 24px;
`;

const ImgPlaceholder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  width: 282px;
  height: 282px;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  color: var(--gray400);
  border-radius: 12px;
  background-color: var(--gray100);
  cursor: pointer;
`;

const ImgPreview = styled.div`
  position: relative;
  width: 282px;
  height: 282px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 12px;
  
  button {
    position: absolute;
    width: 22px;
    height: 24px;
    top: 12px;
    left: 248px;

  }
`;