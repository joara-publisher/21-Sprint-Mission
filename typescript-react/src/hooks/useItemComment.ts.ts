import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  DeleteComment,
  getComments,
  patchComment,
  postComment,
} from "@/lib/comment.api";
import {
  CommentUpdateSchema,
  ItemCommentSchema,
  type CommentType,
  type CommentUpdateValues,
  type ItemCommentValues,
} from "@/types/comment";

function useItemComment() {
  const { id } = useParams();
  const productId = Number(id);

  const [list, setList] = useState<CommentType[]>([]);

  const loadComment = useCallback(async () => {
    let data = null;
    try {
      const response = await getComments(productId);
      data = response.data;
    } catch (error) {
      console.error("상품 문의를 불러오지 못했습니다:", error);
    }

    if (!data) return;
    const { list } = data;
    setList(list);
  }, [productId]);

  useEffect(() => {
    const execute = async () => {
      await loadComment();
    };

    execute();
  }, [loadComment]);

  const {
    control: addControl,
    formState: { isValid: isAddValid },
    handleSubmit: handleAddSubmit,
    reset: resetAdd,
  } = useForm<ItemCommentValues>({
    resolver: zodResolver(ItemCommentSchema),
    mode: "onChange",
    defaultValues: {
      productId: productId,
      content: "",
    },
  });

  const onSubmitComment = async (data: ItemCommentValues) => {
    try {
      await postComment(data.productId, data.content);
      await loadComment();
      resetAdd({ productId: productId, content: "" });
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

  const {
    control: updateControl,
    formState: { isValid: isUpdateValid },
    handleSubmit: handleUpdateSubmit,
    reset: resetUpdate,
  } = useForm<CommentUpdateValues>({
    resolver: zodResolver(CommentUpdateSchema),
    mode: "onChange",
    defaultValues: {
      content: "",
    },
  });

  const onUpdateComment = async (
    commentId: number,
    data: CommentUpdateValues,
  ) => {
    try {
      const response = await patchComment(commentId, data.content);
      const updateContent = response.data.content;
      setList((prevList) =>
        prevList.map((item) =>
          item.id === commentId
            ? {
                ...item,
                content: updateContent,
                updatedAt: new Date().toISOString(),
              }
            : item,
        ),
      );
      resetUpdate({ content: "" });
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

  const onDeleteComment = async (commentId: number) => {
    try {
      await DeleteComment(commentId);
      setList((prevList) => prevList.filter((item) => item.id !== commentId));
      resetUpdate({ content: "" });
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
    list,
    addFormProps: {
      control: addControl,
      isValid: isAddValid,
      onFormSubmit: handleAddSubmit,
      onSubmitComment,
    },
    updateFormProps: {
      control: updateControl,
      isValid: isUpdateValid,
      reset: resetUpdate,
      onFormSubmit: handleUpdateSubmit,
      onUpdateComment,
      onDeleteComment,
    },
  };
}

export default useItemComment;
