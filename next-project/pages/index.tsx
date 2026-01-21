import Head from "next/head";
import { Todo } from "@/types/todos";
import axios from "@/lib/axios";
import { useTodo } from "@/hooks/useTodo";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import Checkbox from "@/components/Checkbox";
import Link from "next/link";

export const getServerSideProps = async () => {
  let initialTodos;
  try {
    const res = await axios.get<Todo[]>("/items");
    initialTodos = res.data ?? [];
  } catch (error) {
    console.error("데이터 로딩 실패:", error);
  }

  return { props: { initialTodos } };
};

export default function Home({ initialTodos }: { initialTodos: Todo[] }) {
  const {
    name,
    todoList,
    doneList,
    handleChangeInput,
    handleAddList,
    handleChangeCheckbox,
  } = useTodo({ initialTodos });

  return (
    <>
      <Head>
        <title>do it!</title>
        <meta
          name="description"
          content="할 일 목록을 관리하는 홈페이지 do it!"
        />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <form onSubmit={handleAddList}>
            <div className={styles.formInner}>
              <div className={styles.inputWrapper}>
                <input
                  className={styles.input}
                  type="text"
                  placeholder="할 일을 입력해주세요"
                  value={name}
                  onChange={handleChangeInput}
                />
              </div>
              <button
                className={`${styles.addButton} ${name ? styles.active : ""}`}
                type="submit"
              ></button>
            </div>
          </form>
          <div className={styles.allTodoList}>
            <div>
              <h2 className={`${styles.listTitle} ${styles.todoTitle}`}></h2>
              {todoList.length == 0 ? (
                <div className={styles.empty}>
                  <div className={styles.emptyImage}>
                    <Image
                      fill
                      src="/todo_empty_lg.png"
                      alt="할 일 목록이 없을때 이미지"
                    />
                  </div>
                  할 일이 없어요.
                  <br /> TODO를 새롭게 추가해주세요!
                </div>
              ) : (
                <ul>
                  {todoList.map((item) => (
                    <li className={styles.item} key={item.id}>
                      <Link href={`/items/${item.id}`}>
                        <Checkbox
                          onChange={(e) => {
                            handleChangeCheckbox(item.id, e.target.checked);
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        />
                        <span className={styles.itemName}>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div>
              <h2 className={`${styles.listTitle} ${styles.doneTitle}`}></h2>
              {doneList.length === 0 ? (
                <div className={styles.empty}>
                  <div className={styles.emptyImage}>
                    <Image
                      fill
                      src="/done_empty_lg.png"
                      alt="다 한 일 목록이 없을때 이미지"
                    />
                  </div>
                  아직 다 한 일이 없어요.
                  <br /> 해야 할 일을 체크해보세요!
                </div>
              ) : (
                <ul>
                  {doneList.map((item) => (
                    <li
                      className={`${styles.item} ${styles.done}`}
                      key={item.id}
                    >
                      <Link href={`/items/${item.id}`}>
                        <Checkbox
                          checked={true}
                          onChange={(e) => {
                            handleChangeCheckbox(item.id, e.target.checked);
                          }}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        />
                        <span className={styles.itemName}>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
