import axios from "../utils/axios";
import { useEffect, useState } from "react";

function useProducts (order, keyword, currentPage, pageSize) {
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  
  const loadProducts = async () => {
    if(pageSize === 0) return;
    
    let data = null;
    try {
      const response = await axios.get('products', {
        params: {
          page: currentPage,
          pageSize: pageSize,
          orderBy: order,
          keyword: keyword,
        },
      });
      data = response.data;
    } catch(error) {
      console.error('에러가 발생했습니다.' + error);
    } 
    
    if(!data) return;
    
    const { list, totalCount } = data;
    setList(list);
    setTotalCount(totalCount);
  };
  
  useEffect(() => {
    loadProducts();
  }, [order, keyword, currentPage, pageSize]);
  
  return {list, totalCount}
  
}

export default useProducts;