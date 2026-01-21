import { Todo } from "@/types/todos";
import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

export const useTodoDetail = ({ initialTodo }: { initialTodo: Todo }) => {
  const [todoItem, setTodoItem] = useState(initialTodo);
  const [isDirty, setIsDirty] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState(initialTodo.imageUrl);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const router = useRouter();

  const handleResizeHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  useEffect(() => {
    handleResizeHeight();
  }, [todoItem.memo]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setIsDirty(true);
    setTodoItem((prev) => ({
      ...prev,
      [name]:
        name === "isCompleted" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const lastDotIndex = selectedFile.name.lastIndexOf(".");
    const fileNameWithoutExtension = selectedFile.name.substring(
      0,
      lastDotIndex,
    );

    const pureEnglishRegex = /^[a-zA-Z]+$/;
    if (!pureEnglishRegex.test(fileNameWithoutExtension)) {
      alert("파일 이름은 오직 영어로만 구성되어야 합니다.");
      e.target.value = "";
      return;
    }

    const maxSize = 5 * 1024 * 1024;
    if (selectedFile.size > maxSize) {
      alert("파일 크기는 5MB 이하여야 합니다.");
      e.target.value = "";
      return;
    }

    setSelectedFile(selectedFile);
    const blobUrl = URL.createObjectURL(selectedFile);
    setPreviewUrl(blobUrl);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      let newImageUrl;
      if (previewUrl !== initialTodo.imageUrl) {
        const res = await axios.post(
          "/images/upload",
          { image: selectedFile },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
        newImageUrl = res.data.url;
      } else {
        newImageUrl = initialTodo.imageUrl;
      }

      const updateData = {
        name: todoItem.name,
        memo: todoItem.memo,
        imageUrl: newImageUrl,
        isCompleted: todoItem.isCompleted,
      };

      await axios.patch(`/items/${todoItem.id}`, updateData);
      alert("성공적으로 수정되었습니다!");
      router.push("/");
    } catch (error) {
      console.error("데이터 전송 실패:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`/items/${id}`);
      alert("성공적으로 삭제되었습니다!");
      router.push("/");
    } catch (error) {
      console.error("데이터 전송 실패:", error);
    }
  };

  return {
    todoItem,
    isDirty,
    selectedFile,
    previewUrl,
    fileInputRef,
    textareaRef,
    handleResizeHeight,
    handleChange,
    handleButtonClick,
    handleFileChange,
    handleSubmit,
    handleDelete,
  };
};
