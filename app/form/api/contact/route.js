import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(request) {
  const { name, email, gender, country, message, fileBase64, fileName } =
    await request.json();

  const filePath = path.join(process.cwd(), "uploads", fileName);

  // base64からデコード
  const base64Data = fileBase64.replace(/^data:image\/\w+;base64,/, "");
  const buffer = Buffer.from(base64Data, "base64");

  // ファイル保存
  await writeFile(filePath, buffer);

  return NextResponse.json({ status: 200 });

  return NextResponse.json({ error: "内部サーバーエラー" }, { status: 500 });
}
