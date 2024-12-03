"use client";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/auth/login", {
  
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    console.log(response.status);
    
    if (response.status == 200) {
      const data = await response.json();
      Cookies.set("authToken", data.token, {
        expires: 1,
        secure: true,
        sameSite: "strict",
      });

      router.push("/admin/product"); 
    } else {
      const errorData = await response.json();
      setError(errorData.error || "Đăng nhập thất bại!");
    }
  } catch (error) {
    setError("Có lỗi xảy ra, vui lòng thử lại!");
  }
};


  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-4 text-center">Đăng Nhập</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Tên đăng nhập</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mật khẩu</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
