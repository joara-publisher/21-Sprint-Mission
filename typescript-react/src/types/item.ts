export interface ItemType {
  id: number;
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: string[];
  ownerId: number;
  ownerNickname: string;
  favoriteCount: number;
  updatedAt: string;
}
