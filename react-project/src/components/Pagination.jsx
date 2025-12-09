import { PaginationWrap, PaginationList, PaginationItem, PaginationButton } from "../styles/PaginationStyles";
import pageArrImg from "../assets/paginationArr.svg"

function Pagination({currentPage, totalCount, pageSize, onChange}) {
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
    <PaginationWrap>
      <PaginationList>
        <PaginationItem className='prevItem'>
          <PaginationButton
            onClick={() => onChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
          <img src={pageArrImg} alt="이전 버튼 이미지" />
        </PaginationButton>
        </PaginationItem>
      
        {pages.map((num) => (
          <PaginationItem key={num} className={num === currentPage ? 'active' : ''}>
            <PaginationButton onClick={() => onChange(num)}>
              {num}
            </PaginationButton>
          </PaginationItem>
        ))}
        <PaginationItem className='nextItem'>
          <PaginationButton
            onClick={() => onChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <img src={pageArrImg} alt="다음 버튼 이미지" />
          </PaginationButton>
        </PaginationItem>
      </PaginationList>
    </PaginationWrap>
  )
}

export default Pagination;