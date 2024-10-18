"use client";
import React, { useCallback, useState } from "react";

export default function page() {
  const [array, setArray] = useState<string[]>([]);
  const [text, setText] = useState("");

  const handleText = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setText(e.target.value);
  };

  const handleAdd = useCallback(() => {
    setArray((prevArray) => {
      if (prevArray.some((item) => item === text)) {
        alert("同じ要素があります");
        return prevArray;
      }
      return [...prevArray, text];
    });
  }, [text]);

  return (
    <div className="pl-5 pt-10">
      <input type={"text"} name="input" value={text} onChange={handleText} />
      <button onClick={handleAdd}>追加</button>
      {array.map((item) => {
        return <div key={item}>{item}</div>;
      })}
    </div>
  );
}
