"use client";
import { useState } from "react";

export default function page() {
  const [todoText, setTodoText] = useState("");
  const [todo, setTodo] = useState(false);

  const onChangeTodoText = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setTodoText(event.target.value);
  };

  const onClickAddTodoText = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    const todo = todoText.length > 0 ? false : true;
    setTodo(todo);
    setTodoText("");
    todo ? event.preventDefault() : false;
  };

  return (
    <>
      <h1>インプットフィールドの練習</h1>
      <form action="/conf" method="post">
        <div className="pt-5">
          <input
            placeholder={"入力してください"}
            type={"text"}
            value={todoText}
            onChange={onChangeTodoText}
          />
          <button
            className="bg-green-500 hover:bg-green-400 text-white rounded px-4 py-2"
            onClick={onClickAddTodoText}
            type="submit"
          >
            追加
          </button>
        </div>
        <div>{todo ? <p>todoを入力してください</p> : <p></p>}</div>
      </form>
    </>
  );
}
