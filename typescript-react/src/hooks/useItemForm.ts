import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ItemFormSchema, type ItemValues } from "@/types/item";
import { postImage, postProducts } from "@/lib/item.api";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function useITemForm() {
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

  const handleDeleteTag = (
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

  return {
    formProps: {
      control,
      errors,
      isValid,
      onFormSubmit: handleSubmit,
      onSubmit,
    },
    fileInputRef,
    previewUrl,
    handleImageButtonClick,
    handleFileChange,
    handleFileDelete,
    handleKeyDown,
    handleDeleteTag,
  };
}
