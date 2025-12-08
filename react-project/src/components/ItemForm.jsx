import { useEffect, useState } from "react";
import FileInput from "./FileInput";
import Tags from "./Tags";

function ItemForm () {
  const [form, setForm] = useState({
    images: [],
    name: '',
    description: '',
    price: 0,
    tags: [],
  });
  const [isFormValid, setIsValid] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setForm(prev => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value, 
    }));
    
    formValidation();
  };
  
  const addTag = (newTag) => {
    setForm(prev => ({
      ...prev, 
      tags: [...prev.tags, newTag],
    }));
    
    formValidation();
  };
  
  const deleteTag = (targetIndex) => {
    setForm(prev => ({
      ...prev, 
      tags: prev.tags.filter((_, i) => i !== targetIndex),
    }));
    
    formValidation();
  };
  
  function formValidation () {
    if( form.name.trim() !== '' && 
    form.description.trim() !== '' && 
    form.price !== 0 && 
    form.tags.length > 0 ) 
      setIsValid(true);
    else setIsValid(false);
  }
  
  useEffect(() => {
    formValidation();
  }, [form])
  
  return (
    <form action="" onSubmit={(e) => e.preventDefault()}>
      <div className="formHeader">
        <h2 className="itemTitle">상품 등록하기</h2>
        <button className={`button defaultButton ${isFormValid ? 'isActive' : 'isNonActive'}`}>등록</button>
      </div>
      
      <FileInput />
      
      <label htmlFor="name">상품명</label>
      <input type="text" name="name" id="name" onChange={handleChange} placeholder="상품명을 입력해주세요" />
      
      <label htmlFor="description">상품 소개</label>
      <textarea name="description" id="description" onChange={handleChange} placeholder="상품 소개를 입력해주세요"></textarea>
      
      <label htmlFor="price">판매가격</label>
      <input type="number" name="price" id="price" onChange={handleChange} placeholder="판매 가격을 입력해주세요" />
      
      <Tags tags={form.tags} addTag={addTag} deleteTag={deleteTag} />
    </form>
  )
}

export default ItemForm;