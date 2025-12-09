import { SearchInput, SearchInputBox } from "../styles/SearchStyles";

function Search ({ changeKeyword }) {
  return (
    <SearchInputBox>
      <SearchInput type="text" placeholder="검색할 상품을 입력해주세요" onChange={changeKeyword} />
    </SearchInputBox>
  )
}

export default Search;