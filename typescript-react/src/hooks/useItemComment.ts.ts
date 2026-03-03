import { getComments } from "@/lib/item.api";
import { useCallback, useEffect, useState } from "react";

function useItemComment(id: number) {
  const [list, setList] = useState([]);

  const loadComment = useCallback(async () => {
    let data = null;
    try {
      const response = await getComments(id);
      data = response.data;
    } catch (error) {
      console.error("상품 문의를 불러오지 못했습니다:", error);
    }

    if (!data) return;
    const { list } = data;
    setList(list);
  }, [id]);

  useEffect(() => {
    const execute = async () => {
      await loadComment();
    };

    execute();
  }, [loadComment]);

  return { list };
}

export default useItemComment;
