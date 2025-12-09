import { ProductListWrapper, Item, Img, Name, Price, Like, Count } from "../styles/ProductListItemStyles";
import likeIcon from "../assets//productLike.svg"

function ProductListItem ({list, category}) {
  return (
    <ProductListWrapper variant={category}>  
      {list.map((item) => (
        <Item key={item.id} variant={category}>
          <Img src={item.images} alt={`${item.name} 이미지`} />
          <Name>{item.name}</Name>
          <Price>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</Price>
          <Like>
            <button>
              <img src={likeIcon} alt="하트 아이콘" />
              <Count>{item.favoriteCount}</Count>
            </button>
          </Like>
        </Item>
      ))}
    </ProductListWrapper>
  )
} 

export default ProductListItem;

