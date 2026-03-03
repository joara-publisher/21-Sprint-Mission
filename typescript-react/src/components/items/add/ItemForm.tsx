import { useEffect, useState, type ChangeEvent } from "react";
import FileInput from "./FileInput";
import Tags from "./Tags";
import { ListTitle } from "@/styles/ItemCommonStyles";
import {
  Form,
  FormHeader,
  Input,
  Label,
  Textarea,
} from "@/styles/ItemFormStyles";
import Button from "@/components/Button";

interface formType {
  name: string;
  description: string;
  price: number;
  tags: string[];
  images: File[];
}

function ItemForm() {
  const [form, setForm] = useState<formType>({
    images: [],
    name: "",
    description: "",
    price: 0,
    tags: [],
  });
  const [isFormValid, setIsValid] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));

    formValidation();
  };

  const addTag = (newTag: string) => {
    setForm((prev) => ({
      ...prev,
      tags: [...prev.tags, newTag],
    }));

    formValidation();
  };

  const deleteTag = (targetIndex: number) => {
    setForm((prev) => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== targetIndex),
    }));

    formValidation();
  };

  function formValidation() {
    if (
      form.name.trim() !== "" &&
      form.description.trim() !== "" &&
      form.price !== 0 &&
      form.tags.length > 0
    )
      setIsValid(true);
    else setIsValid(false);
  }

  useEffect(() => {
    formValidation();
  }, [form]);

  return (
    <Form action="" onSubmit={(e) => e.preventDefault()}>
      <FormHeader>
        <ListTitle>상품 등록하기</ListTitle>
        <Button
          className="button defaultButton"
          type="submit"
          disabled={!isFormValid}
        >
          등록
        </Button>
      </FormHeader>

      <FileInput />

      <Label htmlFor="name">상품명</Label>
      <Input
        type="text"
        name="name"
        id="name"
        onChange={handleChange}
        placeholder="상품명을 입력해주세요"
      />

      <Label htmlFor="description">상품 소개</Label>
      <Textarea
        name="description"
        id="description"
        onChange={handleChange}
        placeholder="상품 소개를 입력해주세요"
      />

      <Label htmlFor="price">판매가격</Label>
      <Input
        type="number"
        name="price"
        id="price"
        onChange={handleChange}
        placeholder="판매 가격을 입력해주세요"
      />

      <Tags tags={form.tags} addTag={addTag} deleteTag={deleteTag} />
    </Form>
  );
}

export default ItemForm;
