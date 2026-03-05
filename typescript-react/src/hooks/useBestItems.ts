import { getProducts } from "@/lib/item.api";
import { useQuery } from "@tanstack/react-query";

function useBestProducts(bestPageSize: number) {
  const {
    data: bestList,
    isLoading: isBestLoading,
    isError: isBestError,
    error: bestError,
  } = useQuery({
    queryKey: ["bestItems"],
    queryFn: async () => {
      const response = await getProducts({
        pageSize: bestPageSize,
        orderBy: "favorite",
      });
      return response.data.list;
    },
  });

  return { bestList, isBestLoading, isBestError, bestError };
}

export default useBestProducts;
