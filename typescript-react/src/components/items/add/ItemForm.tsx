import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/components/Button";
import { FormImageInput } from "./FormImageInput";
import TagInput from "./TagInput";
import { FormInput } from "./FormInput";
import { FormTextarea } from "./FormTextarea";
import { ListTitle } from "@/styles/ItemCommonStyles";
import { Form, FormHeader } from "@/styles/ItemFormStyles";
import { ItemFormSchema, type ItemValues } from "@/types/item";
import { postImage, postProducts } from "@/lib/item.api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ItemForm() {
  const {
    control,
    formState: { errors, isValid },
    handleSubmit: handleSubmit,
  } = useForm<ItemValues>({
    resolver: zodResolver(ItemFormSchema),
    mode: "all",
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      tags: [],
      images: [],
    },
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  // 이미지
  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (value: (File | string)[]) => void,
  ) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    onChange([selectedFile]);
    const blobUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(blobUrl);
  };

  const handleFileDelete = (
    onChange: (value: ItemValues["images"]) => void,
  ) => {
    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      setPreviewUrl(null);
    }

    onChange([]);
  };

  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // 태그
  const handleKeyDown = (
    e: KeyboardEvent<HTMLInputElement>,
    currentTags: string[],
    onChange: (value: string[]) => void,
  ) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = e.currentTarget.value.trim();

      if (newTag) {
        onChange([...(currentTags || []), newTag]);
        e.currentTarget.value = "";
      }
    }
  };

  const deleteTag = (
    targetIndex: number,
    currentTags: string[],
    onChange: (value: string[]) => void,
  ) => {
    const updatedTags = (currentTags || []).filter((_, i) => i !== targetIndex);
    onChange(updatedTags);
  };

  const uploadImage = async (imageUrl: File) => {
    const res = await postImage(imageUrl);
    const nextImageUrl: string = res.url;
    return nextImageUrl;
  };

  const onSubmit = async (data: ItemValues) => {
    try {
      let finalData = data;
      if (data.images[0] instanceof File) {
        const returnImageUrl = await uploadImage(data.images[0]);
        const imageUrl = [returnImageUrl];

        finalData = {
          ...data,
          images: imageUrl,
        };
      }

      await postProducts(finalData);
      alert("등록되었습니다!");
      navigate("/items");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const serverMessage = error.response?.data?.message;
        alert(serverMessage || "서버 응답 오류가 발생했습니다.");
      } else {
        alert("예상치 못한 에러가 발생했습니다.");
      }
      console.error(error);
      throw error;
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
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
            deleteTag={deleteTag}
          />
        )}
      />
    </Form>
  );
}

export default ItemForm;
