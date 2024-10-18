"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Confirm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gender: "",
    country: "",
  });
  const [fileBase64, setFileBase64] = useState(null);
  const [fileName, setFileName] = useState(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem("formData");
    const storedBase64 = sessionStorage.getItem("fileBase64");
    const storedName = sessionStorage.getItem("fileName");
    setFileBase64(storedBase64);
    setFileName(storedName);
    setFormData(JSON.parse(storedData));
  }, []);

  const handleBack = () => router.push("/form?back=true");

  const handleSubmit = async () => {
    try {
      const payload = {
        ...formData, // formDataの中身を展開
        fileBase64,
        fileName,
      };
      const res = await fetch("/form/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        sessionStorage.removeItem("formData");
        router.push("/form/complete");
      }
    } catch (error) {
      alert("送信中にエラーが発生しました。");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">確認画面</h1>

        {/* 入力データの確認表示 */}
        <p>お名前: {formData.name}</p>
        <p>メールアドレス: {formData.email}</p>
        <p>性別: {formData.gender === "male" ? "男性" : "女性"}</p>
        <p>国: {formData.country}</p>
        <p>メッセージ: {formData.message}</p>
        <p>添付ファイル: {fileName}</p>
        {fileBase64 && (
          <img src={fileBase64} alt="preview" style={{ maxWidth: "300px" }} />
        )}

        <div className="flex justify-between mt-4">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-gray-400 text-white rounded-md"
          >
            戻る
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            送信
          </button>
        </div>
      </div>
    </div>
  );
}
