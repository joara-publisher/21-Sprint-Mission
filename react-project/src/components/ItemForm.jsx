import { useEffect, useState } from "react";
import styled from "styled-components";
import FileInput from "./FileInput";
import Tags from "./Tags";
import { ListTitle } from "../styles/ItemCommonStyles";
import { Label, Input, Textarea } from "../styles/FormCommonStyles";

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
    console.log(isFormValid)
  }, [form])
  
  return (
    <Form action="" onSubmit={(e) => e.preventDefault()}>
      <FormHeader>
        <ListTitle>상품 등록하기</ListTitle>
        <button className="button defaultButton" disabled={!isFormValid}>등록</button>
      </FormHeader>
      
      <FileInput />
      
      <Label htmlFor="name">상품명</Label>
      <Input type="text" name="name" id="name" onChange={handleChange} placeholder="상품명을 입력해주세요" />
      
      <Label htmlFor="description">상품 소개</Label>
      <Textarea name="description" id="description" onChange={handleChange} placeholder="상품 소개를 입력해주세요" />
      
      <Label htmlFor="price">판매가격</Label>
      <Input type="number" name="price" id="price" onChange={handleChange} placeholder="판매 가격을 입력해주세요" />
      
      <Tags tags={form.tags} addTag={addTag} deleteTag={deleteTag} />
    </Form>
  )
}

export default ItemForm;

const Form = styled.form`
  margin-bottom: 59px;
  
  @media (max-width: 1199px) {
    margin-bottom: 78px;
  }
  @media (max-width: 1199px) {
    margin-bottom: 70px;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

