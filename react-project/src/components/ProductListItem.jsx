import styles from "./ProductListItem.module.css";
import likeIcon from "../assets//productLike.svg"

function ProductListItem ({list, category}) {
  return (
    <ul className={styles[category]}>  
      {list.map((item) => (
        <li key={item.id} className={styles.item}>
          <img className={styles.img} src={item.images} alt={`${item.name} 이미지`} />
          <div className={styles.title}>{item.name}</div>
          <div className={styles.price}>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</div>
          <div className={styles.like}>
            <button>
              <img src={likeIcon} alt="하트 아이콘" />
              <span className={styles.count}>{item.favoriteCount}</span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
} 

export default ProductListItem;

