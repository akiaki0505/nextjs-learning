import { useState } from "react";

export default function page() {
  return (
    <>
      <h1>インプットフィールドの練習</h1>
      <form action="/comf" method="post">
        <div className="pt-5">
          <p>値</p>
          <button
            className="bg-green-500 hover:bg-green-400 text-white rounded px-4 py-2"
            type="submit"
          >
            登録
          </button>
        </div>
      </form>
    </>
  );
}
