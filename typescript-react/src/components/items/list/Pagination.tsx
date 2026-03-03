import pageArrImg from "@/assets/icons/pagination_arr.svg";
import {
  NextButton,
  PaginationButton,
  PaginationContainer,
  PaginationItem,
  PaginationList,
  PrevButton,
} from "@/styles/PaginationSteyls";

interface Pagination {
  currentPage: number;
  totalCount: number;
  pageSize: number;
  onChange: (num: number) => void;
}

function Pagination({
  currentPage,
  totalCount,
  pageSize,
  onChange,
}: Pagination) {
  const PAGELIMIT = 5;
  const totalPages = Math.ceil(totalCount / pageSize);

  if (totalPages === 0) return null;

  const currentGroup = Math.ceil(currentPage / PAGELIMIT);
  const startPage = (currentGroup - 1) * PAGELIMIT + 1;
  const endPage = Math.min(startPage + PAGELIMIT - 1, totalPages);

  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      <PaginationList>
        <PrevButton>
          <button
            onClick={() => onChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <img src={pageArrImg} alt="이전 버튼 이미지" />
          </button>
        </PrevButton>

        {pages.map((num) => (
          <PaginationItem className={num === currentPage ? "active" : ""}>
            <PaginationButton onClick={() => onChange(num)}>
              {num}
            </PaginationButton>
          </PaginationItem>
        ))}
        <NextButton>
          <button
            onClick={() => onChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={pageArrImg} alt="다음 버튼 이미지" />
          </button>
        </NextButton>
      </PaginationList>
    </PaginationContainer>
  );
}

export default Pagination;
