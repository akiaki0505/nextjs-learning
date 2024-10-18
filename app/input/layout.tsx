"use client";
import React from "react";
import { FormProvider } from "react-hook-form";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div>ヘッダー</div>
      {children}
      <div>フッター</div>
    </>
  );
}
