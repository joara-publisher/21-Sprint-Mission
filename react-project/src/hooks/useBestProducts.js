import axios from "../utils/axios";
import { useEffect, useState } from "react";

function useBestProducts (bestPageSize) {
  const [bestList, setBestList] = useState([]);
    
  const loadBestProducts = async () => {
    if(bestPageSize === 0) return;
    
    let data = null;
    try {
      const response = await axios.get('products', {
        params: {
          pageSize: bestPageSize,
          orderBy: 'favorite',
        },
      });
      data = response.data;
    } catch(error) {
      console.error('에러가 발생했습니다.' + error);
    } 
    
    if(!data) return;
    
    const { list } = data;
    setBestList(list);
  };
  
  useEffect(() => {
    loadBestProducts();
  }, [bestPageSize]);
  
  return { bestList }
}

export default useBestProducts;