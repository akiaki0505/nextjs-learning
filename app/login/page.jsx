"use client";
import React, { useEffect } from "react";
import bcrypt from "bcryptjs";

export default function Login() {
  useEffect(() => {
    const hashPassword = async () => {
      // パスワードをハッシュ化する
      const hashedPassword = await bcrypt.hash("123456789", 10);
      console.log(hashedPassword);
    };

    hashPassword();
  }, []); // コンポーネントの初回レンダリング時に実行

  return <div>page</div>;
}
