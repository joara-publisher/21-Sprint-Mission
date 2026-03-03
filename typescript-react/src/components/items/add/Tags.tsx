import { useRef, useState, type KeyboardEvent } from "react";
import FormErrorMessage from "./FormErrorMessage";
import tagDeleteIcon from "@/assets/icons/form_delete_icon.svg";
import { Input, Label, Tag, TagList } from "@/styles/ItemFormStyles";

interface TagsProps {
  tags: string[];
  addTag: (newTag: string) => void;
  deleteTag: (targetIndex: number) => void;
}

function Tags({ tags, addTag, deleteTag }: TagsProps) {
  const [isErrMsg, setIsErrMsg] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const inputTag = () => {
    if (isErrMsg) setIsErrMsg(false);
  };

  const handleAddTag = (e: KeyboardEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.value.trim();

    if (e.key === "Enter" && !/^[가-힣a-zA-Z0-9]+$/.test(value)) {
      return;
    }

    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      if (tags.includes(value)) {
        setIsErrMsg(true);
      } else {
        addTag(value);
      }

      if (inputRef.current) inputRef.current.value = "";
    }
  };

  const handleDeleteTag = (index: number) => {
    deleteTag(index);
  };

  return (
    <>
      <Label htmlFor="tags">태그</Label>
      <Input
        type="text"
        name="tags"
        id="tags"
        placeholder="태그를 입력해주세요"
        onChange={inputTag}
        onKeyDown={handleAddTag}
        ref={inputRef}
      />
      <TagList>
        {tags.map((tag, index) => (
          <Tag key={index}>
            #{tag}
            <button>
              <img
                src={tagDeleteIcon}
                alt="태그 삭제"
                onClick={() => handleDeleteTag(index)}
              />
            </button>
          </Tag>
        ))}
      </TagList>
      {isErrMsg && (
        <FormErrorMessage>
          *같은 태그가 이미 등록되어 있습니다.
        </FormErrorMessage>
      )}
    </>
  );
}

export default Tags;
