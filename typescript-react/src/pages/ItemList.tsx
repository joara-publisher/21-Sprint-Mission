import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "@/components/Button";
import ItemListItem from "@/components/items/list/Item";
import Search from "@/components/items/list/Search";
import useBestItems from "@/hooks/useBestItems";
import useResponsivePageSize from "@/hooks/useResponsivePageSize";
import {
  Container,
  ItemListBox,
  ItemListWrap,
  ListTitle,
  SearchSelectBox,
  TitleBox,
} from "@/styles/ItemListStyles";
import { useState, type ChangeEvent } from "react";
import Dropdown from "@/components/items/list/Dropdown";
import useItems from "@/hooks/useItems";
import Pagination from "@/components/items/list/Pagination";

function ItemList() {
  const [order, setOrder] = useState<"recent" | "favorite">("recent");
  const [searchParams, setSearchParams] = useSearchParams();
  const initKeyword = searchParams.get("keyword");
  const [keyword, setKeyword] = useState(initKeyword || "");
  const [currentPage, setCurrentPage] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { pageSize, bestPageSize, currentScreen } = useResponsivePageSize();
  const { bestList } = useBestItems(bestPageSize);
  const navigate = useNavigate();
  const { list, totalCount } = useItems(order, keyword, currentPage, pageSize);

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

  const goToAddItem = () => {
    navigate("/additem");
  };

  const changePage = (num: number) => {
    setCurrentPage(num);
  };

  return (
    <>
      <ItemListWrap>
        <Container>
          <ItemListBox>
            <TitleBox>
              <ListTitle>베스트 상품</ListTitle>
            </TitleBox>
            <ItemListItem list={bestList} category="bestItemList" />
          </ItemListBox>

          <ItemListBox>
            <TitleBox>
              <ListTitle>전체 상품</ListTitle>
              <Button
                className="button defaultButton mobile-only"
                onClick={goToAddItem}
              >
                상품 등록하기
              </Button>
              <SearchSelectBox>
                <Search changeKeyword={changeKeyword} />
                <Button
                  className="button defaultButton pc-only"
                  onClick={goToAddItem}
                >
                  상품 등록하기
                </Button>
                <Dropdown
                  isOpen={dropdownOpen}
                  value={order}
                  currentScreen={currentScreen}
                  toggleDropdown={toggleDropdown}
                  changeOrder={changeOrder}
                />
              </SearchSelectBox>
            </TitleBox>
            <ItemListItem list={list} category="itemList" />
            <Pagination
              currentPage={currentPage}
              totalCount={totalCount}
              pageSize={pageSize}
              onChange={changePage}
            />
          </ItemListBox>
        </Container>
      </ItemListWrap>
    </>
  );
}

export default ItemList;
