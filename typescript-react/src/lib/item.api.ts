import axios from "@/lib/axios";
import type { ItemValues } from "@/types/item";

interface GetItemsParams {
  page?: number;
  pageSize?: number;
  orderBy?: "recent" | "favorite";
  keyword?: string;
}

export const getProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword,
}: GetItemsParams = {}) => {
  const response = await axios.get("/products", {
    params: {
      page,
      pageSize,
      orderBy,
      keyword,
    },
  });

  return response;
};

export const getProduct = async (id: number) => {
  const response = await axios.get(`products/${id}`);

  return response;
};

export const getComments = async (id: number) => {
  const response = await axios.get(`products/${id}/comments`, {
    params: {
      limit: 10,
    },
  });

  return response;
};

export const postImage = async (image: File) => {
  const formData = new FormData();
  formData.append("image", image);

  const response = await axios.post("/images/upload", formData);

  return response.data;
};

export const postProducts = async (data: ItemValues) => {
  const response = await axios.post("/products", data);

  return response.data;
};
