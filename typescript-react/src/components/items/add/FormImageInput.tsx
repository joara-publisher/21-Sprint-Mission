import type { ControllerRenderProps } from "react-hook-form";
import type { ItemValues } from "@/types/item";
import { useId, type ChangeEvent } from "react";
import {
  ErrorMsg,
  ImgPlaceholder,
  ImgPreview,
  ImgWrap,
  Label,
} from "@/styles/ItemFormStyles";
import placeholderImg from "@/assets/icons/plus_icon.svg";
import imgDeleteIcon from "@/assets/icons/form_delete_icon.svg";

interface ImageInputProps {
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  field: ControllerRenderProps<ItemValues, "images">;
  error?: string | null;
  previewUrl: string | null;
  onImageButtonClick: () => void;
  onFileChange: (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: (File | string)[]) => void,
  ) => void;
  onFileDelete: () => void;
}

export function FormImageInput({
  fileInputRef,
  field,
  error,
  previewUrl,
  onImageButtonClick,
  onFileChange,
  onFileDelete,
}: ImageInputProps) {
  const id = useId();

  return (
    <>
      <Label htmlFor={id}>상품 이미지</Label>
      <input
        id={id}
        type="file"
        accept="image/*"
        aria-label="이미지 파일 선택"
        ref={(e) => {
          field.ref(e);
          fileInputRef.current = e;
        }}
        className="hidden"
        onChange={(e) => onFileChange(e, field.onChange)}
      />

      <ImgWrap>
        <ImgPlaceholder onClick={onImageButtonClick}>
          <img src={placeholderImg} alt="플러스 아이콘" />
          이미지 등록
        </ImgPlaceholder>
        {previewUrl && (
          <ImgPreview style={{ backgroundImage: `url(${previewUrl})` }}>
            <button onClick={onFileDelete}>
              <img src={imgDeleteIcon} alt="이미지 삭제" />
            </button>
          </ImgPreview>
        )}
      </ImgWrap>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  );
}
