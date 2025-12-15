import { useNavigate, useParams } from "react-router-dom";
import useProduct from "../hooks/useProduct";
import useProductInquiry from "../hooks/useProductInquiry";
import ProductDetail from "../components/ProductDetail";
import ProductInquirySection from "../components/ProductInquirySection";
import Button from './../components/Button';
import { Container } from "../styles/ProductCommonStyles";
import backButtonIcon from "../assets/backIcon.svg"
import { ButtonWrap, Divider } from "../styles/ProductStyles";

function Product () {
  const { id } = useParams();
  const { item } = useProduct(id);
  const { list } = useProductInquiry(id);
  const navigate = useNavigate();
  
  const goToProductList = () => {
    navigate('/items');
  }

  // 로딩 처리
  if (!item) return <div>Loading...</div>;

  return (
    <div className="item itemDetails">
      <Container>
        <ProductDetail item={item} />
        <Divider />
        <ProductInquirySection list={list} />
        <ButtonWrap>
          <Button className="button defaultButton" variant="rounded" withIcon={true} fontSizeVariant="18px" paddingVarian="11px 39.5px" onClick={goToProductList}>
            목록으로 돌아가기
            <img src={backButtonIcon} alt="목록으로 돌아가기 아이콘" />
          </Button>
        </ButtonWrap>
      </Container>
    </div>
  )
}

export default Product;