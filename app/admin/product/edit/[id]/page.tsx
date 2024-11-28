"use client";
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';

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
  isIncludeMasterDiamond: boolean;
  shape: string;
}

interface ProductResponse {
  productId: number;
  productName: string;
  categoryId: number;
  price: number;
  metallicColor: string;
  ringBelt: string;
  material: string;
  discount: number;
  images: string;
  isFeatured: boolean;
  isActive: boolean;
  isIncludeMasterDiamond: boolean;
  shape: string;
  createdAt: string;
  updatedAt: string | null;
  collections: any[];
}

interface Category {
  id: number;
  name: string;
}

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
const METALLIC_COLORS = [
  { value: 'vang_trang', label: 'Vàng Trắng' },
  { value: 'vang_chanh', label: 'Vàng Chanh' },
  { value: 'vang_hong', label: 'Vàng Hồng' }
];

const RING_BELTS = [
  { value: 'tron', label: 'Đai Trơn' },
  { value: 'nham', label: 'Đai Nhám' },
  { value: 'dinh_xoan', label: 'Đai Đính Xoàn' }
];


const SHAPE = [
  { value: "Round", label: "Hình Tròn" },
  { value: "Oval", label: "Hình Bầu Dục" },
  { value: "Pear", label: "Hình Giọt Lệ" },
  { value: "Emerald", label: "Hình Chữ Nhật Vát Góc" },
];

const MATERIALS = [
  { value: 'au750', label: 'AU750' },
  { value: 'hk', label: 'HK' }
];
const EditProduct: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const productId = params.id as string;

  const { register, handleSubmit, control, setValue, reset } = useForm<ProductFormData>();
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [previews, setPreviews] = useState<string[]>([]);
  const [existingImages, setExistingImages] = useState<{id: number, url: string}[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productResponse = await axios.get<ProductResponse>(`http://localhost:8080/api/admin/products/${productId}`);
        const product = productResponse.data;

        setValue('productName', product.productName);
        setValue('categoryId', product.categoryId);
        setValue('price', product.price);
        setValue('metallicColor', product.metallicColor);
        setValue('ringBelt', product.ringBelt);
        setValue('material', product.material);
        setValue('discount', product.discount);
        setValue('isFeatured', product.isFeatured);
        setValue('isActive', product.isActive);


        const imageIds = product.images ? product.images.split(',').map(id => parseInt(id.trim())) : [];


        const imageUrls = await Promise.all(
          imageIds.map(async (imageId: number) => {
            try {

              const response = await axios.get(`http://localhost:8080/image/id/${imageId}`, {
                responseType: 'blob'
              });
              return URL.createObjectURL(response.data);
            } catch (err) {
              console.error(`Error fetching image ${imageId}:`, err);
              return null;
            }
          })
        );

        // Filter out any null URLs
        const validImageUrls = imageUrls.filter(url => url !== null);

        setExistingImages(
          imageIds.map((id: number, index: number) => ({
            id,
            url: validImageUrls[index]
          }))
        );

        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError('Failed to load product details');
        setIsLoading(false);
      }
    };

    if (productId) {
      fetchProductDetails();
    }
  }, [productId, setValue]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filePreviewUrls = Array.from(files).map(file => 
        URL.createObjectURL(file)
      );
      setPreviews(prev => [...prev, ...filePreviewUrls]);
      setValue('images', files);
    }
  };

  const removeNewImage = (indexToRemove: number) => {
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

  const removeExistingImage = (imageId: number) => {
    setExistingImages(prev => 
      prev.filter(image => image.id !== imageId)
    );
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
    if (existingImages.length > 0) {
      existingImages.forEach((image) => {
        formData.append('existingImages', image.id.toString());
      });
    }
  
    if (data.images && data.images.length > 0) {
      Array.from(data.images).forEach((file) => {
        formData.append('images', file);  
      });
    }
  
    try {
      const response = await axios.put(`http://localhost:8080/api/admin/products/${productId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage('Product updated successfully!');
      setError(null);
    } catch (err: any) {
      setError(err.response?.data || 'Something went wrong');
      setMessage(null);
    }
  };
  
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-6">Edit Product</h1>
      {typeof message === "string" && message && (
        <p className="text-green-500 mb-4">{message}</p>
      )}
      {typeof error === "string" && error && (
        <p className="text-red-500 mb-4">{error}</p>
      )}

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block mb-2">Tên Sản Phẩm:</label>
          <input
            {...register("productName", { required: true })}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Loại Sản Phẩm:</label>
          <select
            {...register("categoryId", { required: true })}
            className="w-full border rounded p-2"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block mb-2">Giá:</label>
          <input
            type="number"
            step="0.01"
            {...register("price", { required: true })}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Màu kim loại:</label>
          <Controller
            name="metallicColor"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full border rounded p-2">
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

        <div className="mb-4">
          <label className="block mb-2">Đai Nhẫn:</label>
          <Controller
            name="ringBelt"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full border rounded p-2">
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

        <div className="mb-4">
          <label className="block mb-2">Chất Liệu:</label>
          <Controller
            name="material"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full border rounded p-2">
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

        <div className="mb-4">
          <label className="block mb-2">Hình Dạng:</label>
          <Controller
            name="shape"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full border rounded p-2">
                <option value="">Chọn chất liệu</option>
                {SHAPE.map((shape) => (
                  <option key={shape.value} value={shape.value}>
                    {shape.label}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Giảm giá:</label>
          <input
            type="number"
            step="0.01"
            {...register("discount")}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Sản phẩm nổi bật:</label>
          <Controller
            name="isFeatured"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                className="mr-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Sản phẩm khả dụng:</label>
          <Controller
            name="isActive"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                className="mr-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Giá đã bao gồm viên chủ:</label>
          <Controller
            name="isIncludeMasterDiamond"
            control={control}
            render={({ field }) => (
              <input
                type="checkbox"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
                className="mr-2"
              />
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Ảnh (Nhiều):</label>
          <input
            type="file"
            multiple
            onChange={handleImageChange}
            className="mb-4"
          />

          {/* Existing Images */}
          {existingImages.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-4">
              {existingImages.map((image) => (
                <div key={image.id} className="relative">
                  <img
                    src={image.url}
                    alt={`Existing image`}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                    onClick={() => removeExistingImage(image.id)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* New Image Previews */}
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
                    onClick={() => removeNewImage(index)}
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Sửa sản phẩm
        </button>
      </form>
    </div>
  );
};

export default EditProduct;