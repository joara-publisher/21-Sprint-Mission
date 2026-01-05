import {
  DetailWrap,
  DetailDate,
  DetailDesc,
  DetailFavoritButton,
  DetailFavoritCount,
  DetailFavoritImg,
  DetailImg,
  DetailInfoList,
  DetailInfoTitle,
  DetailName,
  DetailNicknameWrap,
  DetailOwnerImg,
  DetailOwnerNickname,
  DetailOwnerWrapper,
  DetailPrice,
  DetailTxtBottom,
  DetailTxtTop,
  DetailTxtWrap,
  LocalTagList,
} from "../styles/ProductDetailStyles";
import { Tag } from "../styles/ProductCommonStyles";
import profileDefaultImg from "../assets/profileDefaultImg.png";

function ProductDetail({ item }) {
  return (
    <DetailWrap>
      <DetailImg src={item.images[0]} alt={`${item.name} 이미지`} />
      <DetailTxtWrap>
        <DetailTxtTop>
          <DetailName>{item.name}</DetailName>
          <DetailPrice>{item.price.toLocaleString()}원</DetailPrice>
        </DetailTxtTop>
        <DetailInfoList>
          <DetailInfoTitle>상품 소개</DetailInfoTitle>
          <DetailDesc>{item.description}</DetailDesc>
          <DetailInfoTitle>상품 태그</DetailInfoTitle>
          <LocalTagList>
            {item.tags.map((tag, index) => (
              <Tag key={`tag-${tag}-${index}`}>#{tag}</Tag>
            ))}
          </LocalTagList>
        </DetailInfoList>
        <DetailTxtBottom>
          <DetailOwnerWrapper>
            <DetailOwnerImg src={profileDefaultImg} alt="" />
            <DetailNicknameWrap>
              <DetailOwnerNickname>{item.ownerNickname}</DetailOwnerNickname>
              <DetailDate>
                {new Date(item.updatedAt).toLocaleDateString().slice(0, -1)}
              </DetailDate>
            </DetailNicknameWrap>
          </DetailOwnerWrapper>
          <DetailFavoritButton>
            <DetailFavoritImg />
            <DetailFavoritCount>{item.favoriteCount}</DetailFavoritCount>
          </DetailFavoritButton>
        </DetailTxtBottom>
      </DetailTxtWrap>
    </DetailWrap>
  );
}

export default ProductDetail;
