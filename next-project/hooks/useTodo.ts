import { Todo } from "@/types/todos";
import axios from "@/lib/axios";
import { ChangeEvent, FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/router";

export const useTodo = ({ initialTodos }: { initialTodos: Todo[] }) => {
  const [allTodo, setAllTodo] = useState<Todo[]>(initialTodos);
  const [name, setName] = useState("");
  const router = useRouter();

  const todoList = useMemo(
    () => allTodo.filter((list) => !list.isCompleted),
    [allTodo],
  );
  const doneList = useMemo(
    () => allTodo.filter((list) => list.isCompleted),
    [allTodo],
  );

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddList = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name.trim() === "") return;

    try {
      const res = await axios.post<Todo>("/items", { name });
      const addItem = res.data;

      setName("");
      setAllTodo((prev) => {
        const { id, name, isCompleted } = addItem;
        return [{ id, name, isCompleted }, ...prev];
      });
    } catch (error) {
      console.error("데이터 전송 실패:", error);
    }
  };

  const handleChangeCheckbox = async (id: number, isCompleted: boolean) => {
    try {
      const res = await axios.patch<Todo>(`/items/${id}`, { isCompleted });
      const editItem = res.data;

      setAllTodo((prev) =>
        prev.map((todo) => {
          if (todo.id === id) {
            const { id, name, isCompleted } = editItem;
            return { id, name, isCompleted };
          }
          return todo;
        }),
      );
    } catch (error) {
      console.error("데이터 전송 실패:", error);
    }
  };

  return {
    name,
    todoList,
    doneList,
    handleChangeInput,
    handleAddList,
    handleChangeCheckbox,
  };
};
