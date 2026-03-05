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
import { useMutation } from "@tanstack/react-query";

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

  const { mutate: addProduct } = useMutation({
    mutationFn: async (data: ItemValues) => {
      let finalData = data;

      if (data.images[0] instanceof File) {
        const returnImageUrl = await uploadImage(data.images[0]);
        const imageUrl = [returnImageUrl];

        finalData = {
          ...data,
          images: imageUrl,
        };
      }

      return await postProducts(finalData);
    },
    onSuccess: () => {
      alert("등록되었습니다!");
      navigate("/items");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const onSubmit = (data: ItemValues) => {
    addProduct(data);
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
