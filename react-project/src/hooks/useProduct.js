import { useEffect, useState } from "react";
import axios from "../utils/axios";

function useProduct (id) {
  const [item, setItem] = useState(null);
  
  const loadItem = async () => {
    try {
      const response = await axios.get(`products/${id}`);
      const data = response.data;
      setItem(data);
    } catch (error) {
      console.error("상품 정보를 불러오지 못했습니다:", error);
    }
  };
  
  useEffect(() => {
    loadItem();
  }, []);
  
  return { item }
}

export default useProduct;