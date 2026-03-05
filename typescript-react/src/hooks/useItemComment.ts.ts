import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
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

  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["item", id],
    queryFn: async () => {
      const response = await getComments(productId);
      return response.data.list;
    },
    enabled: !!productId,
  });

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

  const queryClient = useQueryClient();

  const { mutate: addCommentMutation } = useMutation({
    mutationFn: (data: ItemCommentValues) =>
      postComment(data.productId, data.content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["item", id] });
      resetAdd({ productId: productId, content: "" });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message || "서버 응답 오류가 발생했습니다.",
        );
      } else {
        alert("예상치 못한 에러가 발생했습니다.");
      }
    },
  });

  const onSubmitComment = (data: ItemCommentValues) => {
    addCommentMutation(data);
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

  const { mutate: updateCommentMutation } = useMutation({
    mutationFn: ({
      commentId,
      data,
    }: {
      commentId: number;
      data: CommentUpdateValues;
    }) => patchComment(commentId, data.content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["item", id] });
      resetUpdate({ content: "" });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message || "서버 응답 오류가 발생했습니다.",
        );
      } else {
        alert("예상치 못한 에러가 발생했습니다.");
      }
    },
  });

  const onUpdateComment = (commentId: number, data: CommentUpdateValues) => {
    updateCommentMutation({ commentId, data });
  };

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: (commentId: number) => DeleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["item", id] });
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        alert(
          error.response?.data?.message || "서버 응답 오류가 발생했습니다.",
        );
      } else {
        alert("예상치 못한 에러가 발생했습니다.");
      }
    },
  });

  const onDeleteComment = (commentId: number) => {
    deleteCommentMutation(commentId);
  };

  return {
    listProps: {
      list: list as CommentType[],
      isLoading,
      isError,
      error,
    },
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
