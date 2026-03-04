import { useNavigate, useParams } from "react-router-dom";
import useItem from "@/hooks/useItem";
import Button from "@/components/Button";
import { Container } from "@/styles/ItemCommonStyles";
import { ButtonWrap, Divider } from "@/styles/ItemStyles";
import backButtonIcon from "@/assets/icons/back.svg";
import ItemDetail from "@/components/items/detail/ItemDetail";
import ItemCommentSection from "@/components/items/detail/ItemCommentSection";

function Item() {
  const { id } = useParams();
  const targetId = Number(id);
  const { item } = useItem(targetId);
  const navigate = useNavigate();

  const goToItemList = () => {
    navigate("/items");
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className="item itemDetails">
      <Container>
        <ItemDetail item={item} />
        <Divider />
        <ItemCommentSection />
        <ButtonWrap>
          <Button
            className="button defaultButton"
            variant="rounded"
            withIcon={true}
            fontSizeVariant="md"
            onClick={goToItemList}
          >
            목록으로 돌아가기
            <img src={backButtonIcon} alt="목록으로 돌아가기 아이콘" />
          </Button>
        </ButtonWrap>
      </Container>
    </div>
  );
}

export default Item;
