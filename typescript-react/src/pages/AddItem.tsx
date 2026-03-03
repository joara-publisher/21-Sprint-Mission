import { Container } from "@/styles/ItemFormStyles";
import ItemForm from "../components/items/add/ItemForm";

function AddItem() {
  return (
    <div className="item addItem">
      <Container>
        <ItemForm />
      </Container>
    </div>
  );
}

export default AddItem;
