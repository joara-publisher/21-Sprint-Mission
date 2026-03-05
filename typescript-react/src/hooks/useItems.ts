import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/item.api";
import { useState, type ChangeEvent } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function useProducts(pageSize: number) {
  const [order, setOrder] = useState<"recent" | "favorite">("recent");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["items", { currentPage, pageSize, order, keyword }],
    queryFn: async () => {
      const response = await getProducts({
        page: currentPage,
        pageSize: pageSize,
        orderBy: order,
        keyword: keyword,
      });
      return response.data;
    },
  });

  const list = data?.list || [];
  const totalCount = data?.totalCount || 0;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeOrder = (order: "recent" | "favorite") => {
    setDropdownOpen(!dropdownOpen);
    setOrder(order);
    setCurrentPage(1);
  };

  const changeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;
    setKeyword(keyword);
    setSearchParams(keyword ? { keyword } : {});
    setCurrentPage(1);
  };

  const changePage = (num: number) => {
    setCurrentPage(num);
  };

  const goToAddItem = () => {
    navigate("/additem");
  };

  return {
    list,
    totalCount,
    isLoading,
    isError,
    error,
    state: {
      order,
      currentPage,
      dropdownOpen,
    },
    actions: {
      toggleDropdown,
      changeOrder,
      changeKeyword,
      changePage,
      goToAddItem,
    },
  };
}

export default useProducts;
