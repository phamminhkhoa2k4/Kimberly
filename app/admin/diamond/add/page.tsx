"use client";
import Body from "@/components/Body";
import { CLARITY } from "@/constans/clarity";
import { COLOR } from "@/constans/color";
import { SHAPE } from "@/constans/shape";
import { createData } from "@/utils/axios";
import { useRouter } from "next/navigation";
import { useState } from "react";







const CreateDiamondPage = () => {
  const [formData, setFormData] = useState({
    weight: "",
    size: "",
    colorGrade: "",
    clarity: "",
    cutting: "",
    shape: "",
    price: "",
  });

  const router = useRouter();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
         await createData({
        endpoint: "/admin/diamonds",
        payload: JSON.stringify(formData),
      });
      alert("Tạo Kim Cương Viên Thành Công!");
      router.push("/admin/diamond");
    } catch (err) {
      alert(`Error: ${(err as Error).message}`);
    }
  };



  return (
    <div className=" mx-auto w-10/12">
      <h1 className="text-2xl font-bold mb-6">Tạo Mới Kim Cương Viên</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-full">
        <div className="w-full">
          <label className="block mb-1 font-medium">Trọng Lượng</label>
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Kích Thước</label>
          <input
            type="number"
            name="size"
            value={formData.size}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Giá</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          />
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Cấp Màu</label>
          <select
            name="colorGrade"
            value={formData.colorGrade}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="" disabled>
              -- Chọn Cấp Màu --
            </option>
            {COLOR.map((color) => (
              <option key={color.label} value={color.value}>
                {color.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Độ Tinh Khiết</label>
          <select
            name="clarity"
            value={formData.clarity}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="" disabled>
              -- Chọn Độ Tinh Khiết --
            </option>
            {CLARITY.map((clarity) => (
              <option key={clarity.label} value={clarity.value}>
                {clarity.label}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Giác Cắt</label>
          <select
            name="cutting"
            value={formData.cutting}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="" disabled>
              -- Chọn Giác Cắt --
            </option>
            <option value="Excellent">Excellent</option>
            <option value="Very Good">Very Good</option>
            <option value="Good">Good</option>
          </select>
        </div>
        <div className="w-full">
          <label className="block mb-1 font-medium">Hình Dạng</label>
          <select
            name="shape"
            value={formData.shape}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
            required
          >
            <option value="" disabled>
              -- Chọn Hình Dạng --
            </option>
            {SHAPE.map((shape) => (
              <option key={shape.label} value={shape.value}>
                {shape.label}
              </option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 w-full font-bold text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Tạo
        </button>
      </form>
    </div>
  );
};

export default CreateDiamondPage;
