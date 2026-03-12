import type { ItemType } from "@/types/item";
import {
  FavoritButtonCount,
  FavoritButtonImg,
  ItemListWrapper,
  ListItem,
  ListItemFavoritButton,
  ListItemImg,
  ListItemLink,
  ListItemName,
  ListItemPrice,
} from "@/styles/ListItemStyles";
import ItemLikeIcon from "@/assets/icons/item_like.svg";

interface ItemListItemProps {
  list: ItemType[];
  category: "bestItemList" | "itemList";
}

function ItemListItem({ list, category }: ItemListItemProps) {
  return (
    <ItemListWrapper variant={category}>
      {list.map((item) => (
        <ListItem key={item.id} variant={category}>
          <ListItemLink to={`/items/${item.id}`}>
            <ListItemImg src={item.images[0]} alt={`${item.name} 이미지`} />
            <ListItemName>{item.name}</ListItemName>
            <ListItemPrice>{item.price.toLocaleString()}원</ListItemPrice>
            <ListItemFavoritButton>
              <FavoritButtonImg src={ItemLikeIcon} alt="하트 아이콘" />
              <FavoritButtonCount>{item.favoriteCount}</FavoritButtonCount>
            </ListItemFavoritButton>
          </ListItemLink>
        </ListItem>
      ))}
    </ItemListWrapper>
  );
}

export default ItemListItem;
