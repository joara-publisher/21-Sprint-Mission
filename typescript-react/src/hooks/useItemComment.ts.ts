import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "react-router-dom";
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
import { handleError } from "@/utils/error";

function useItemComment() {
  const { id } = useParams();
  const productId = Number(id);

  const {
    data: list,
    isLoading,
    isError,
    error,
  } = useQuery<CommentType[]>({
    queryKey: ["item", id, "comments"],
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
      queryClient.invalidateQueries({ queryKey: ["item", id, "comments"] });
      resetAdd({ productId: productId, content: "" });
    },
    onError: (error) => {
      handleError(error);
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
      queryClient.invalidateQueries({ queryKey: ["item", id, "comments"] });
      resetUpdate({ content: "" });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const onUpdateComment = (commentId: number, data: CommentUpdateValues) => {
    updateCommentMutation({ commentId, data });
  };

  const { mutate: deleteCommentMutation } = useMutation({
    mutationFn: (commentId: number) => DeleteComment(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["item", id, "comments"] });
    },
    onError: (error) => {
      handleError(error);
    },
  });

  const onDeleteComment = (commentId: number) => {
    deleteCommentMutation(commentId);
  };

  return {
    commentListProps: {
      list: list as CommentType[],
      isLoading,
      isError,
      error,
    },
    commentAddFormProps: {
      control: addControl,
      isValid: isAddValid,
      onFormSubmit: handleAddSubmit,
      onSubmitComment,
    },
    commentUpdateFormProps: {
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
