import { useRef, useState, type ChangeEvent } from "react";
import {
  ImgPlaceholder,
  ImgPreview,
  ImgWrap,
  Label,
} from "@/styles/ItemFormStyles";
import placeholderImg from "@/assets/icons/plus_icon.svg";
import imgDeleteIcon from "@/assets/icons/form_delete_icon.svg";
import FormErrorMessage from "./FormErrorMessage";

function FileInput() {
  const [file, setFile] = useState<File | "">("");
  const [preview, setPreview] = useState("");
  const [isErrMsg, setIsErrMsg] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const clickAddImage = () => {
    if (file) {
      setIsErrMsg(true);
      return;
    }

    if (inputRef.current) inputRef.current.click();
  };

  const addImage = (e: ChangeEvent<HTMLInputElement>) => {
    const changeFile = e.target.files?.[0];
    if (changeFile) {
      setFile(changeFile);

      if (preview) {
        URL.revokeObjectURL(preview);
      }

      const objectURL = URL.createObjectURL(changeFile);
      setPreview(objectURL);
    }
  };

  const deletePreview = () => {
    setFile("");
    if (preview) {
      URL.revokeObjectURL(preview);
    }
    setPreview("");
    setIsErrMsg(false);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <Label htmlFor="images">상품 이미지</Label>
      <input
        type="file"
        name="images"
        id="images"
        onChange={addImage}
        ref={inputRef}
        hidden
      />
      <ImgWrap>
        <ImgPlaceholder onClick={clickAddImage}>
          <img src={placeholderImg} alt="플러스 아이콘" />
          이미지 등록
        </ImgPlaceholder>
        {preview && (
          <ImgPreview style={{ backgroundImage: `url(${preview})` }}>
            <button onClick={deletePreview}>
              <img src={imgDeleteIcon} alt="이미지 삭제" />
            </button>
          </ImgPreview>
        )}
      </ImgWrap>
      {isErrMsg && (
        <FormErrorMessage>
          *이미지 등록은 최대 1개까지 가능합니다.
        </FormErrorMessage>
      )}
    </>
  );
}

export default FileInput;
