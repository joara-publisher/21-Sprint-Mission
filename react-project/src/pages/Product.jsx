import { useParams } from "react-router-dom";
import { Container } from "../styles/ProductCommonStyles";
import useProduct from "../hooks/useProduct";
import ProductDetail from "../components/ProductDetail";
import ProductInquirySection from "../components/ProductInquirySection";
import useProductInquiry from "../hooks/useProductInquiry";

function Product () {
  const { id } = useParams();
  const { item } = useProduct(id);
  const { list } = useProductInquiry(id);

  // 로딩 처리
  if (!item) return <div>Loading...</div>;

  return (
    <div className="item itemDetails">
      <Container>
        <ProductDetail item={item} />
        <ProductInquirySection list={list} />
      </Container>
    </div>
  )
}

export default Product;