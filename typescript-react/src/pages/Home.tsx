import {
  CommonContentBox,
  CommonInner,
  SectionBanner,
  SectionBottom,
  SectionInner,
  SectionItems,
  SectionRegister,
  SectionSearch,
} from "../styles/HomeStyles";
import itemImg from "../assets/images/item.png";
import searchImg from "../assets/images/search.png";
import registerImg from "../assets/images/register.png";

function Home() {
  return (
    <main>
      <SectionBanner>
        <SectionInner>
          <CommonContentBox>
            <h2 className="section_title">일상의 모든 물건을 거래해 보세요</h2>
            <a href="/items" className="btn click_to_items">
              구경하러 가기
            </a>
          </CommonContentBox>
        </SectionInner>
      </SectionBanner>
      <SectionItems>
        <CommonInner>
          <div className="section_img">
            <img src={itemImg} alt="인기 상품들 이미지" />
          </div>
          <div className="section_txt">
            <p className="section_category">Hot item</p>
            <h2 className="section_title">
              인기 상품을
              <br />
              확인해 보세요
            </h2>
            <h3 className="section_desc">
              가장 HOT한 중고거래 물품을
              <br /> 판다 마켓에서 확인해 보세요
            </h3>
          </div>
        </CommonInner>
      </SectionItems>
      <SectionSearch>
        <CommonInner>
          <div className="section_txt">
            <p className="section_category">Search</p>
            <h2 className="section_title">
              구매를 원하는
              <br />
              상품을 검색하세요
            </h2>
            <h3 className="section_desc">
              구매하고 싶은 물품은 검색해서
              <br /> 쉽게 찾아보세요
            </h3>
          </div>
          <div className="section_img">
            <img src={searchImg} alt="상품검색 이미지" />
          </div>
        </CommonInner>
      </SectionSearch>
      <SectionRegister>
        <CommonInner>
          <div className="section_img">
            <img src={registerImg} alt="상품등록 이미지" />
          </div>
          <div className="section_txt">
            <p className="section_category">Register</p>
            <h2 className="section_title">
              판매를 원하는
              <br />
              상품을 등록하세요
            </h2>
            <h3 className="section_desc">
              어떤 물건이든 판매하고 싶은 상품을
              <br /> 쉽게 등록하세요
            </h3>
          </div>
        </CommonInner>
      </SectionRegister>
      <SectionBottom>
        <SectionInner>
          <CommonContentBox>
            <h2 className="section_title">믿을 수 있는 판다마켓 중고 거래</h2>
          </CommonContentBox>
        </SectionInner>
      </SectionBottom>
    </main>
  );
}

export default Home;
