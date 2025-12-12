import ProductForm from "../components/ProductForm";
import { Container } from "../styles/ProductCommonStyles";

function AddProduct () {
  return (
    <div className="item addItem">
      <Container>
        <ProductForm />
      </Container>
    </div>
  )
}

export default AddProduct;