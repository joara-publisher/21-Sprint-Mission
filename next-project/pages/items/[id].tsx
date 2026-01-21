import { GetServerSidePropsContext } from "next";
import { Todo } from "@/types/todos";
import axios from "@/lib/axios";
import { useTodoDetail } from "@/hooks/useTodoDetail";
import styles from "@/styles/ItemDetail.module.css";
import Image from "next/image";
import Checkbox from "@/components/Checkbox";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;

  try {
    const res = await axios.get<Todo>(`/items/${id}`);
    const initialTodo = res.data;
    return { props: { initialTodo } };
  } catch (error) {
    console.error("데이터 로딩 실패:", error);
    return {
      notFound: true,
    };
  }
}

export default function ItemsPage({ initialTodo }: { initialTodo: Todo }) {
  const {
    todoItem,
    isDirty,
    previewUrl,
    fileInputRef,
    textareaRef,
    handleResizeHeight,
    handleChange,
    handleButtonClick,
    handleFileChange,
    handleSubmit,
    handleDelete,
  } = useTodoDetail({ initialTodo });

  return (
    <main className={styles.itemPage}>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <div
            className={`${styles.itemNameBox} ${todoItem.isCompleted ? styles.active : ""}`}
          >
            <Checkbox
              name="isCompleted"
              checked={todoItem.isCompleted}
              onChange={handleChange}
            />
            <input
              type="text"
              name="name"
              className={styles.itemName}
              value={todoItem.name}
              size={todoItem.name.length > 0 ? todoItem.name.length : 1}
              onChange={handleChange}
            />
          </div>
          <div className={styles.itemContent}>
            <div
              className={`${styles.itemImageBox} ${previewUrl ? "" : styles.default}`}
            >
              {previewUrl ? (
                <Image fill src={previewUrl} alt="이미지 미리보기" />
              ) : (
                <Image
                  width={64}
                  height={64}
                  src="/file_default.svg"
                  alt="기본 아이콘"
                />
              )}
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
              <button
                className={`${styles.itemImageButton} ${previewUrl ? styles.edit : styles.add}`}
                type="button"
                onClick={handleButtonClick}
              ></button>
            </div>
            <div className={styles.itemMemoBox}>
              <span className={styles.MemoBoxTitle}>Memo</span>
              <div className={styles.memoWrapper}>
                <textarea
                  ref={textareaRef}
                  name="memo"
                  className={styles.memo}
                  value={todoItem.memo}
                  onChange={(e) => {
                    handleChange(e);
                    handleResizeHeight();
                  }}
                  rows={1}
                />
              </div>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button
              className={`${styles.editButton} ${isDirty ? styles.active : ""}`}
              type="submit"
            ></button>
            <button
              className={styles.deleteButton}
              type="button"
              onClick={() => handleDelete(todoItem.id)}
            ></button>
          </div>
        </form>
      </div>
    </main>
  );
}
