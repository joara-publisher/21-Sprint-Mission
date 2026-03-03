import { useCallback, useEffect, useState } from "react";
import { getProduct } from "@/lib/item.api";
import type { ItemType } from "@/types/item";

function useItem(id: number) {
  const [item, setItem] = useState<ItemType>();

  const loadItem = useCallback(async () => {
    let data = null;
    try {
      const response = await getProduct(id);
      data = response.data;
      setItem(data);
    } catch (error) {
      console.error("상품 정보를 불러오지 못했습니다:", error);
    }
  }, [id]);

  useEffect(() => {
    const execute = async () => {
      await loadItem();
    };

    execute();
  }, [loadItem]);

  return { item };
}

export default useItem;
