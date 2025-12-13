import ProductInquiryForm from "./ProductInquiryForm";
import ProductInquiryList from "./ProductInquiryList";

function ProductInquirySection ({ list }) {
  return (
    <>
      <ProductInquiryForm />
      <ProductInquiryList list={list} />
    </>
  )
}

export default ProductInquirySection;