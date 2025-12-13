import { useEffect, useState } from "react";
import axios from "../utils/axios";

function useProductInquiry (id) {
  const [list, setList] = useState([]);
  
  let data = null;
  const loadInquiry = async () => {
    try {
      const response = await axios.get(`products/${id}/comments`, {
        params: {
          limit: 10,
        },
      });
      data = response.data;
    } catch (error) {
      console.error("상품 문의를 불러오지 못했습니다:", error);
    }
    
    if(!data) return;
    const { list } = data;
    setList(list);
  };
  
  useEffect(() => {
    loadInquiry();
  }, []);
  
  return { list }
}

export default useProductInquiry;