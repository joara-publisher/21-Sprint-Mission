import { SearchInput, SearchInputBox } from "@/styles/SearchStyles";
import type { ChangeEvent } from "react";

interface SearchProps {
  changeKeyword: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Search({ changeKeyword }: SearchProps) {
  return (
    <SearchInputBox>
      <SearchInput
        type="text"
        placeholder="검색할 상품을 입력해주세요"
        onChange={changeKeyword}
      />
    </SearchInputBox>
  );
}

export default Search;
