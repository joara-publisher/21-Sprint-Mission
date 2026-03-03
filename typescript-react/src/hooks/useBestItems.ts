import { useCallback, useEffect, useState } from "react";
import { getProducts } from "@/lib/item.api";

function useBestProducts(bestPageSize: number) {
  const [bestList, setBestList] = useState([]);

  const loadBestProducts = useCallback(async () => {
    let data = null;
    try {
      const response = await getProducts({
        pageSize: bestPageSize,
        orderBy: "favorite",
      });
      data = response.data;
    } catch (error) {
      console.error("에러가 발생했습니다." + error);
    }

    if (!data) return;

    const { list } = data;
    setBestList(list);
  }, [bestPageSize]);

  useEffect(() => {
    const execute = async () => {
      await loadBestProducts();
    };

    execute();
  }, [loadBestProducts]);

  return { bestList };
}

export default useBestProducts;
