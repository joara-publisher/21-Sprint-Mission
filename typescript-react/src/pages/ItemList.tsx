import useResponsivePageSize from "@/hooks/useResponsivePageSize";
import useBestItems from "@/hooks/useBestItems";
import useItems from "@/hooks/useItems";
import axios from "axios";
import Search from "@/components/items/list/Search";
import Dropdown from "@/components/items/list/Dropdown";
import Pagination from "@/components/items/list/Pagination";
import Button from "@/components/Button";
import ItemListItem from "@/components/items/list/Item";
import {
  Container,
  ItemListBox,
  ItemListWrap,
  ListTitle,
  SearchSelectBox,
  TitleBox,
} from "@/styles/ItemListStyles";

function ItemList() {
  const { pageSize, bestPageSize, currentScreen } = useResponsivePageSize();
  const { bestList, isBestLoading, isBestError, bestError } =
    useBestItems(bestPageSize);
  const { list, totalCount, isLoading, isError, error, state, actions } =
    useItems(pageSize);

  const { order, currentPage, dropdownOpen } = state;
  const {
    toggleDropdown,
    changeOrder,
    changeKeyword,
    changePage,
    goToAddItem,
  } = actions;

  return (
    <>
      <ItemListWrap>
        <Container>
          <ItemListBox>
            <TitleBox>
              <ListTitle>베스트 상품</ListTitle>
            </TitleBox>
            {isBestLoading ? (
              <div>Loading...</div>
            ) : isBestError ? (
              <div>
                {axios.isAxiosError(bestError)
                  ? bestError.response?.data?.message
                  : "베스트 상품 로드 실패"}
              </div>
            ) : (
              <ItemListItem list={bestList} category="bestItemList" />
            )}
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
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>
                {axios.isAxiosError(error)
                  ? error.response?.data?.message
                  : "상품 리스트 로드 실패"}
              </div>
            ) : (
              <ItemListItem list={list} category="itemList" />
            )}

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
