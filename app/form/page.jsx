"use client"; // クライアント側で動作するコンポーネントを指定

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation"; // useSearchParamsを使う

export default function Form() {
  const router = useRouter();
  const searchParams = useSearchParams(); // URLのクエリパラメータを取得
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    gender: "",
    country: "",
  });
  const [file, setFile] = useState(null);
  const [fileBase64, setFileBase64] = useState(null);
  const [fileName, setFileName] = useState("");

  // 初期化時に sessionStorage からデータを取得
  useEffect(() => {
    const isReturning = searchParams.get("back") === "true";

    if (isReturning) {
      const storedData = JSON.parse(sessionStorage.getItem("formData"));
      const storedBase64 = sessionStorage.getItem("fileBase64");
      const storedName = sessionStorage.getItem("fileName");
      setFileBase64(storedBase64);
      setFileName(storedName);
      if (storedData) setFormData(storedData);
    } else {
      sessionStorage.removeItem("formData");
      sessionStorage.removeItem("fileBase64");
      sessionStorage.removeItem("fileName");
    }
  }, [searchParams]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFileBase64(base64String);
        setFileName(selectedFile.name);

        // Session Storageにファイル情報を保存
        sessionStorage.setItem("fileBase64", base64String);
        sessionStorage.setItem("fileName", selectedFile.name);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handleNext = () => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
    router.push("/form/confirm");
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50">
      <form className="bg-white p-8 shadow-md rounded-lg w-full max-w-lg">
        <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            お名前
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <span className="block text-gray-700 mb-2">性別</span>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            男性
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            女性
          </label>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="country">
            国
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            required
          >
            <option value="">選択してください</option>
            <option value="japan">日本</option>
            <option value="usa">アメリカ</option>
            <option value="uk">イギリス</option>
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            メッセージ
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-md"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            添付ファイル
          </label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
            className="w-full px-4 py-2 border rounded-md"
            rows="4"
            required
          />
        </div>
        {fileBase64 && (
          <div className="pb-4">
            <p>選択済みのファイル: {fileName}</p>
            <img src={fileBase64} alt="preview" style={{ maxWidth: "300px" }} />
          </div>
        )}

        <button
          type="button"
          onClick={handleNext}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-md"
        >
          確認画面へ
        </button>
      </form>
    </div>
  );
}
