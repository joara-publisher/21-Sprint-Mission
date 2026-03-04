import { Controller } from "react-hook-form";
import Button from "@/components/Button";
import { FormImageInput } from "./FormImageInput";
import TagInput from "./TagInput";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { ListTitle } from "@/styles/ItemCommonStyles";
import { Form, FormHeader } from "@/styles/ItemFormStyles";
import { useITemForm } from "@/hooks/useItemForm";

function ItemForm() {
  const {
    formProps,
    fileInputRef,
    previewUrl,
    handleImageButtonClick,
    handleFileChange,
    handleFileDelete,
    handleKeyDown,
    handleDeleteTag,
  } = useITemForm();
  const { control, errors, isValid, onFormSubmit, onSubmit } = formProps;

  return (
    <Form onSubmit={onFormSubmit(onSubmit)}>
      <FormHeader>
        <ListTitle>상품 등록하기</ListTitle>
        <Button
          className="button defaultButton"
          type="submit"
          disabled={!isValid}
        >
          등록
        </Button>
      </FormHeader>

      <Controller
        name="images"
        control={control}
        render={({ field }) => (
          <FormImageInput
            fileInputRef={fileInputRef}
            field={field}
            error={errors.images?.message as string}
            previewUrl={previewUrl}
            onImageButtonClick={handleImageButtonClick}
            onFileChange={handleFileChange}
            onFileDelete={() => handleFileDelete(field.onChange)}
          />
        )}
      />

      <Controller
        name="name"
        control={control}
        render={({ field }) => (
          <FormInput
            label="상품명"
            field={field}
            type="text"
            placeholder="상품명을 입력해주세요"
            error={errors.name?.message}
          />
        )}
      />

      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <FormTextarea
            label="상품 소개"
            field={field}
            placeholder="상품 소개를 입력해주세요"
            error={errors.description?.message}
          />
        )}
      />

      <Controller
        name="price"
        control={control}
        render={({ field }) => (
          <FormInput
            label="판매가격"
            field={field}
            type="number"
            placeholder="판매 가격을 입력해주세요"
            error={errors.price?.message}
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              const value = e.target.valueAsNumber;
              field.onChange(isNaN(value) ? 0 : value);
            }}
          />
        )}
      />

      <Controller
        name="tags"
        control={control}
        render={({ field }) => (
          <TagInput
            label="태그"
            field={field}
            placeholder="태그를 입력해주세요"
            error={errors.tags?.message}
            onKeyDown={handleKeyDown}
            onDeleteTag={handleDeleteTag}
          />
        )}
      />
    </Form>
  );
}

export default ItemForm;
