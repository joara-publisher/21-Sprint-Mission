import styles from "./Pagination.module.css";
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
    <div className={styles.pagination}>
      <ul>
        <li className={styles.prevButton}>
          <button
            onClick={() => onChange(startPage - 1)}
            disabled={startPage === 1}
          >
          <img src={pageArrImg} alt="이전 버튼 이미지" />
        </button>
        </li>
      
        {pages.map((num) => (
          <li key={num} className={num === currentPage ? styles.active : ''}>
            <button onClick={() => onChange(num)}>
              {num}
            </button>
          </li>
        ))}
        <li className={styles.nextButton}>
          <button
            onClick={() => onChange(endPage + 1)}
            disabled={endPage === totalPages}
          >
            <img src={pageArrImg} alt="다음 버튼 이미지" />
          </button>
        </li>
      </ul>
    </div>
  )
}

export default Pagination;