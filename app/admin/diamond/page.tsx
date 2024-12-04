"use client";
import Body from "@/components/Body";
import { deleteData, getData } from "@/utils/axios";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Diamond {
  diamondId: number;
  weight: number;
  size: number;
  colorGrade: string;
  clarity: string;
  cutting: string;
  shape: string;
  price: number;
}

const DiamondsPage = () => {
  const [diamonds, setDiamonds] = useState<Diamond[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadDiamonds = async () => {
      try {
        const data = await getData({ endpoint: "/admin/diamonds" });
        setDiamonds(data);
      } catch (err) {
        setError((err as Error).message);
      }
    };
    loadDiamonds();
  }, []);

  const handleDelete = async (id: number) => {
    const confirmed = confirm(
      "bạn có chắc là muốn xóa viên kim cương này không ?"
    );
    if (!confirmed) return;

    try {
      await deleteData({ endpoint: "admin/diamonds", id: id });
      alert("xóa viên kiêm cương thành công");
      setDiamonds((prev) => prev.filter((diamond) => diamond.diamondId !== id));
    } catch (err) {
      alert(`Error: ${(err as Error).message}`);
    }
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }


  const formatNumber = (number: number) => {
    return number.toLocaleString("id-ID");
  }
  return (
    <div className="container mx-auto w-10/12">
      <h1 className="text-2xl font-bold mb-6">Danh Sách Kim Cương Viên</h1>
      <Link
        href="/admin/diamond/add"
        className="bg-blue-500 rounded-md py-3 px-6 text-white font-bold"
      >
        Tạo Mới{" "}
      </Link>
      <div className="overflow-x-auto mt-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 text-left border-b">ID</th>
              <th className="px-4 py-2 text-left border-b">Trọng Lượng</th>
              <th className="px-4 py-2 text-left border-b">Kích Thước</th>
              <th className="px-4 py-2 text-left border-b">Cấp Màu</th>
              <th className="px-4 py-2 text-left border-b">Độ Tinh Khiết</th>
              <th className="px-4 py-2 text-left border-b">Giác Cắt</th>
              <th className="px-4 py-2 text-left border-b">Hình Dạng</th>
              <th className="px-4 py-2 text-left border-b">Giá (VND)</th>
              <th className="px-4 py-2 text-left border-b">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {diamonds.map((diamond) => (
              <tr key={diamond.diamondId} className="hover:bg-gray-50">
                <td className="px-4 py-2 border-b">{diamond.diamondId}</td>
                <td className="px-4 py-2 border-b">{diamond.weight}</td>
                <td className="px-4 py-2 border-b">{diamond.size || "N/A"}</td>
                <td className="px-4 py-2 border-b">
                  {diamond.colorGrade || "N/A"}
                </td>
                <td className="px-4 py-2 border-b">
                  {diamond.clarity || "N/A"}
                </td>
                <td className="px-4 py-2 border-b">
                  {diamond.cutting || "N/A"}
                </td>
                <td className="px-4 py-2 border-b">{diamond.shape || "N/A"}</td>
                <td className="px-4 py-2 border-b">
                  {formatNumber(diamond.price)}
                </td>
                <td className="px-4 py-2 border-b">
                  <Link
                    href={`/admin/diamond/edit/${diamond.diamondId}`}
                    className="text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => handleDelete(diamond.diamondId)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiamondsPage;
