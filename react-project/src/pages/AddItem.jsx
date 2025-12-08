import ItemForm from "../components/ItemForm";
import ItemStyles from "./Item.module.css";

function AddItem () {
  return (
    <div className={`${ItemStyles.item} addItem`}>
      <div className={ItemStyles.container}>
        <ItemForm />
      </div>
    </div>
  )
}

export default AddItem;