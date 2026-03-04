import axios from "@/lib/axios";

export const getComments = async (id: number) => {
  const response = await axios.get(`products/${id}/comments`, {
    params: {
      limit: 10,
    },
  });

  return response;
};

export const postComment = async (productId: number, content: string) => {
  const response = await axios.post(`products/${productId}/comments`, {
    content,
  });

  return response;
};

export const patchComment = async (commentId: number, content: string) => {
  const response = await axios.patch(`/comments/${commentId}`, {
    content,
  });

  return response;
};

export const DeleteComment = async (commentId: number) => {
  const response = await axios.delete(`/comments/${commentId}`);

  return response;
};
