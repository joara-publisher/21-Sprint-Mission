import { getProducts } from "@/lib/item.api";
import { useCallback, useEffect, useState } from "react";

function useProducts(
  order: "recent" | "favorite",
  keyword: string,
  currentPage: number,
  pageSize: number,
) {
  const [list, setList] = useState([]);
  const [totalCount, setTotalCount] = useState(0);

  const loadProducts = useCallback(async () => {
    let data = null;
    try {
      const response = await getProducts({
        page: currentPage,
        pageSize: pageSize,
        orderBy: order,
        keyword: keyword,
      });
      data = response.data;
    } catch (error) {
      console.error("에러가 발생했습니다." + error);
    }

    if (!data) return;

    const { list, totalCount } = data;
    setList(list);
    setTotalCount(totalCount);
  }, [currentPage, pageSize, order, keyword]);

  useEffect(() => {
    const execute = async () => {
      await loadProducts();
    };

    execute();
  }, [loadProducts]);

  return { list, totalCount };
}

export default useProducts;
