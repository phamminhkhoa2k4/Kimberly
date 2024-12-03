import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "Kimberly";

console.log("SECRET_KEY:", SECRET_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  if (username === "admin" && password === "123456") {
    const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: "1d" });
    return NextResponse.json({ token });
  }

  return NextResponse.json(
    { error: "Tên đăng nhập hoặc mật khẩu không đúng!" },
    { status: 401 }
  );
}
