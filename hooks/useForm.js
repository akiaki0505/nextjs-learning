// hooks/useForm.js
import { useState } from "react";

export const useForm = () => {
  const [formData, setFormData] = useState({
    file: null,
    // 他のフィールドがあればここに追加
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const resetForm = () => {
    setFormData({
      file: null,
      // 他のフィールドがあればここにリセットする処理を追加
    });
  };

  return { formData, handleChange, resetForm };
};
