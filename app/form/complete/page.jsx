"use client";

import { useRouter } from "next/navigation";

export default function Complete() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg text-center">
        <h1 className="text-2xl font-bold mb-4">送信完了</h1>
        <p>お問い合わせありがとうございます。</p>
        <button
          onClick={() => router.push("/form")}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
        >
          フォームに戻る
        </button>
      </div>
    </div>
  );
}
