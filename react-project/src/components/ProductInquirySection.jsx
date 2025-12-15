import { InquirySectionWrap } from "../styles/ProductInquiryStyles";
import ProductInquiryForm from "./ProductInquiryForm";
import ProductInquiryList from "./ProductInquiryList";

function ProductInquirySection ({ list }) {
  return (
    <InquirySectionWrap>
      <ProductInquiryForm />
      <ProductInquiryList list={list} />
    </InquirySectionWrap>
  )
}

export default ProductInquirySection;