"use client";
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { cn } from "@/lib/utils";

interface ProductFormData {
  productName: string;
  categoryId: number;
  price: number;
  metallicColor: string;
  ringBelt: string;
  material: string;
  discount: number;
  images: FileList;
  isFeatured: boolean;
  isActive: boolean;
  isIncludeMasterDiamond : boolean;
  shape : string;
}

interface Category {
  id: number;
  name: string;
}
const METALLIC_COLORS = [
  { value: "Vàng Trắng", label: "Vàng Trắng" },
  { value: "Vàng Chanh", label: "Vàng Chanh" },
  { value: "Vàng Hồng", label: "Vàng Hồng" },
];

const RING_BELTS = [
  { value: "Đai Trơn", label: "Đai Trơn" },
  { value: "Đai Nhám", label: "Đai Nhám" },
  { value: "Đai Đính Xoàn", label: "Đai Đính Xoàn" },
];

const SHAPE = [
  { value: "Round", label: "Hình Tròn" },
  { value: "Oval", label: "Hình Bầu Dục" },
  { value: "Pear", label: "Hình Giọt Lệ" },
  { value: "Emerald", label: "Hình Chữ Nhật Vát Góc" },
];

const MATERIALS = [
  { value: 'au750', label: 'AU750' },
  { value: 'hk', label: 'HK' },
  { value: 'Vàng 14k', label: 'Vàng 14k' },
  { value: 'Vàng 18k', label: 'Vàng 18k' }
];
const categories: Category[] = [
  { id: 1, name: "Nhẫn" },
  { id: 2, name: "Nhẫn Nam" },
  { id: 3, name: "Nhẫn Nữ" },
  { id: 4, name: "Nhẫn Cầu Hôn" },
  { id: 5, name: "Nhẫn Cưới" },
  { id: 6, name: "Bông Tai" },
  { id: 7, name: "Vòng Cổ" },
  { id: 8, name: "Vòng Tay" },
  { id: 9, name: "Bộ Trang Sức" },
];

const CreateProduct: React.FC = () => {
  const { register, handleSubmit, control, reset, setValue } = useForm<ProductFormData>();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filePreviewUrls = Array.from(files).map(file => 
        URL.createObjectURL(file)
      );
      setPreviews(filePreviewUrls);
      setValue('images', files);
    }
  };

  const removeImage = (indexToRemove: number) => {
    const input = document.querySelector('input[type="file"]') as HTMLInputElement;
    const files = input.files;
    
    if (files) {
      const updatedFiles = Array.from(files).filter((_, index) => index !== indexToRemove);
      const dataTransfer = new DataTransfer();
      updatedFiles.forEach(file => dataTransfer.items.add(file));
      input.files = dataTransfer.files;
      const updatedPreviews = previews.filter((_, index) => index !== indexToRemove);
      setPreviews(updatedPreviews);
      setValue('images', input.files);
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    const formData = new FormData();
    formData.append('productName', data.productName);
    formData.append('categoryId', data.categoryId.toString());
    formData.append('price', data.price.toString());
    formData.append('metallicColor', data.metallicColor);
    formData.append('ringBelt', data.ringBelt);
    formData.append('material', data.material);
    formData.append('discount', data.discount.toString());
    formData.append('isFeatured', data.isFeatured.toString());
    formData.append('isActive', data.isActive.toString());
    formData.append("isIncludeMasterDiamond", data.isIncludeMasterDiamond.toString());
    formData.append("shape", data.shape);

    Array.from(data.images).forEach((file) => {
      formData.append('images', file);
    });

    try {
      const response = await axios.post('http://localhost:8080/api/admin/products', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Product created successfully!');
      setError(null);
      reset();
      setPreviews([]);
    } catch (err: any) {
      setError(err.response?.data || 'Something went wrong');
      setMessage(null);
    }
  };

  return (
    <div
      className={cn(
        "transition-all duration-75 ",
        scrollY > 70 ? "lg:mt-[57px]" : "mt-[120px] lg:mt-[140px]"
      )}
    >
      <h1>Create Product</h1>
      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div>
          <label>Tên Sản Phẩm:</label>
          <input {...register("productName", { required: true })} />
        </div>
        <div>
          <label>Loại Sản Phẩm:</label>
          <Controller
            name="categoryId"
            control={control}
            defaultValue={0}
            render={({ field }) => (
              <select {...field} id="category">
                <option value="">Chọn danh mục</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <div>
          <label>Giá:</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: true })}
          />
        </div>
        <div>
          <label>Màu kim loại:</label>
          <Controller
            name="metallicColor"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Chọn màu kim loại</option>
                {METALLIC_COLORS.map((color) => (
                  <option key={color.value} value={color.value}>
                    {color.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <div>
          <label>Đai Nhẫn:</label>
          <Controller
            name="ringBelt"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Chọn đai nhẫn</option>
                {RING_BELTS.map((belt) => (
                  <option key={belt.value} value={belt.value}>
                    {belt.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <div>
          <label>Chất Liệu:</label>
          <Controller
            name="material"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Chọn chất liệu</option>
                {MATERIALS.map((material) => (
                  <option key={material.value} value={material.value}>
                    {material.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <div>
          <label>Chất Liệu:</label>
          <Controller
            name="shape"
            control={control}
            render={({ field }) => (
              <select {...field}>
                <option value="">Chọn Hình Dạng</option>
                {SHAPE.map((shape) => (
                  <option key={shape.value} value={shape.value}>
                    {shape.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>
        <div>
          <label>Giảm giá %:</label>
          <input type="number" step="0.01" {...register("discount")} />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Ảnh (nhiều):</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mb-4"
          />
          {previews.length > 0 && (
            <div className="flex flex-wrap gap-4">
              {previews.map((preview, index) => (
                <div key={index} className="relative">
                  <img
                    src={preview}
                    alt={`Preview ${index + 1}`}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => removeImage(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        <div>
          <label>Sản phẩm nổi bật:</label>
          <Controller
            name="isFeatured"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                name={field.name}
                ref={field.ref}
              />
            )}
          />
        </div>
        <div>
          <label>Giá đã gồm viên chủ:</label>
          <Controller
            name="isIncludeMasterDiamond"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                name={field.name}
                ref={field.ref}
              />
            )}
          />
        </div>
        <div>
          <label>Sản phẩm khả dụng:</label>
          <Controller
            name="isActive"
            control={control}
            defaultValue={true}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)} // Cập nhật giá trị boolean
                name={field.name}
                ref={field.ref}
              />
            )}
          />
        </div>
        <button type="submit">Tạo Sản Phẩm</button>
      </form>
    </div>
  );
};

export default CreateProduct;
