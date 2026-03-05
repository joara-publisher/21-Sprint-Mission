import { type ControllerRenderProps } from "react-hook-form";
import { useId } from "react";
import type { ItemValues } from "@/types/item";
import { ErrorMsg, Input, Label, Tag, TagList } from "@/styles/ItemFormStyles";
import tagDeleteIcon from "@/assets/icons/form_delete_icon.svg";

interface TagInputProps {
  label: string;
  field: ControllerRenderProps<ItemValues, "tags">;
  placeholder: string;
  error?: string | null;
  onKeyDown: (
    e: React.KeyboardEvent<HTMLInputElement>,
    currentTags: string[],
    onChange: (value: string[]) => void,
  ) => void;
  onDeleteTag: (
    targetIndex: number,
    currentTags: string[],
    onChange: (value: string[]) => void,
  ) => void;
}

function TagInput({
  label,
  field,
  placeholder,
  error,
  onKeyDown,
  onDeleteTag,
}: TagInputProps) {
  const id = useId();

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type="text"
        placeholder={placeholder}
        onKeyDown={(e) => onKeyDown(e, field.value, field.onChange)}
      />

      <TagList>
        {(field.value || []).map((tag: string, index: number) => (
          <Tag key={`${tag}-${index}`}>
            #{tag}
            <button
              type="button"
              onClick={() => onDeleteTag(index, field.value, field.onChange)}
            >
              <img src={tagDeleteIcon} alt="태그 삭제" />
            </button>
          </Tag>
        ))}
      </TagList>
      {error && <ErrorMsg>{error}</ErrorMsg>}
    </>
  );
}

export default TagInput;
