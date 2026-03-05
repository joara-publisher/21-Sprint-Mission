import { useQuery } from "@tanstack/react-query";
import { getProduct } from "@/lib/item.api";
import type { ItemType } from "@/types/item";

function useItem(id: number) {
  const {
    data: item,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["item", id],
    queryFn: async () => {
      const response = await getProduct(id);
      return response.data;
    },
    enabled: !!id,
  });

  return {
    item: item as ItemType,
    isLoading,
    isError,
    error,
  };
}

export default useItem;
