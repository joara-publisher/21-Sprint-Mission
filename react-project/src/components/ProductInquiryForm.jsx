import { useState } from "react";
import {
  InquiryForm,
  InquiryFormButton,
  InquiryFormTextarea,
  InquiryFormTitle,
} from "../styles/ProductInquiryStyles";

function ProductInquiryForm() {
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  return (
    <div>
      <InquiryFormTitle>문의하기</InquiryFormTitle>
      <InquiryForm>
        <InquiryFormTextarea
          onChange={handleChange}
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
        />
        <InquiryFormButton
          className="button defaultButton"
          disabled={!content.trim()}
        >
          등록
        </InquiryFormButton>
      </InquiryForm>
    </div>
  );
}

export default ProductInquiryForm;
