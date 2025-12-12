import { ProductListWrapper, ListItem, ListItemLink, ListItemImg, ListItemName, ListItemPrice, ListItemFavoritButton, FavoritButtonImg, FavoritButtonCount } from "../styles/ProductListItemStyles";
import likeIcon from "../assets//productLike.svg"

function ProductListItem ({list, category}) {
  return (
    <ProductListWrapper variant={category}>  
      {list.map((item) => (
        <ListItem key={item.id} variant={category}>
          <ListItemLink to={`/items/${item.id}`}>
            <ListItemImg src={item.images} alt={`${item.name} 이미지`} />
            <ListItemName>{item.name}</ListItemName>
            <ListItemPrice>{item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원</ListItemPrice>
            <ListItemFavoritButton>
              <FavoritButtonImg src={likeIcon} alt="하트 아이콘" />
              <FavoritButtonCount>{item.favoriteCount}</FavoritButtonCount>
            </ListItemFavoritButton>
          </ListItemLink>
        </ListItem>
      ))}
    </ProductListWrapper>
  )
} 

export default ProductListItem;

