import ItemForm from "../components/ItemForm";
import { Container } from "../styles/ItemCommonStyles";

function AddItem () {
  return (
    <div className="item addItem">
      <Container>
        <ItemForm />
      </Container>
    </div>
  )
}

export default AddItem;