import styles from "./Search.module.css";

function Search ({ changeKeyword }) {
  return (
    <div className={styles.searchInputBox}>
      <input className={styles.searchInput} type="text" placeholder="검색할 상품을 입력해주세요" onChange={changeKeyword} />
    </div>
  )
}

export default Search;