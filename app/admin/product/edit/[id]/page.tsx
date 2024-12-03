"use client";
import React, { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useParams, useRouter } from 'next/navigation';
import { cn } from "@/lib/utils";

interface ProductFormData {
  productName: string;
  categoryId: number;
  price: number;
  metallicColorIds: number[];
  ringBelt: number;
  materialId: number;
  discount: number;
  images: FileList;
  isFeatured: boolean;
  isActive: boolean;
  isIncludeMasterDiamond: boolean;
  shapeId: number;
  isMale: boolean;
}

interface ProductResponse {
  productId: number;
  productName: string;
  categoryId: number;
  price: number;
  metallicColorIds: number[];
  ringBelt: number;
  materialId: number;
  discount: number;
  images: string;
  isFeatured: boolean;
  isActive: boolean;
  isIncludeMasterDiamond: boolean;
  shapeId: number;
  isMale: boolean;
  createdAt: string;
  updatedAt: string | null;
}

// Interfaces for dropdown options

interface Category {
  categoryId: number;
  categoryName: string;
}

interface Material {
  materialId: number;
  materialName: string;
}

interface MetallicColor {
  metallicColorId: number;
  colorName: string;
}

interface Shape {
  shapeId: number;
  shapeName: string;
}

interface RingBelt {
  ringBeltId: number;
  beltType: string;
}
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
  const [categories, setCategories] = useState<Category[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [metallicColors, setMetallicColors] = useState<MetallicColor[]>([]);
  const [shapes, setShapes] = useState<Shape[]>([]);
  const [ringBelts, setRingBelts] = useState<RingBelt[]>([]);
const ApiEnd="http://localhost:8080"

  useEffect(() => {
    const fetchDropdownOptions = async () => {
      try {
        const [
          categoriesRes,
          materialsRes, 
          metallicColorsRes, 
          shapesRes, 
          ringBeltsRes
        ] = await Promise.all([
          axios.get(`${ApiEnd}/api/product/category`),
          axios.get(`${ApiEnd}/api/product/material`),
          axios.get(`${ApiEnd}/api/product/metallicColors`),
          axios.get(`${ApiEnd}/api/product/shape`),
          axios.get(`${ApiEnd}/api/product/ringbelt`)
        ]);

        setCategories(categoriesRes.data);
        setMaterials(materialsRes.data);
        setMetallicColors(metallicColorsRes.data);
        setShapes(shapesRes.data);
        setRingBelts(ringBeltsRes.data);
      } catch (err) {
        console.error('Error fetching dropdown options:', err);
        setError('Failed to load dropdown options');
      }
    };

    fetchDropdownOptions();
  }, []);


  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const productResponse = await axios.get<ProductResponse>(`${ApiEnd}/api/admin/products/${productId}`);
        const product = productResponse.data;

        setValue('productName', product.productName);
        setValue('categoryId', product.categoryId);
        setValue('price', product.price);
        setValue('metallicColorIds', product.metallicColorIds);
        setValue('ringBelt', product.ringBelt);
        setValue('materialId', product.materialId);
        setValue('discount', product.discount);
        setValue('isFeatured', product.isFeatured);
        setValue('isActive', product.isActive);
        setValue('isIncludeMasterDiamond', product.isIncludeMasterDiamond);
        setValue('shapeId', product.shapeId);
        setValue('isMale', product.isMale);

        const imageIds = product.images ? product.images.split(',').map(id => parseInt(id.trim())) : [];

        const imageUrls = await Promise.all(
          imageIds.map(async (imageId: number) => {
            try {
              const response = await axios.get(`${ApiEnd}/image/id/${imageId}`, {
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
    
    // Append multiple metallic color IDs
    data.metallicColorIds.forEach(colorId => 
      formData.append('metallicColorIds', colorId.toString())
    );
    
    formData.append('ringBelt', data.ringBelt.toString());
    formData.append('materialId', data.materialId.toString());
    formData.append('discount', data.discount.toString());
    formData.append('isFeatured', data.isFeatured.toString());
    formData.append('isActive', data.isActive.toString());
    formData.append('isIncludeMasterDiamond', data.isIncludeMasterDiamond.toString());
    formData.append('shapeId', data.shapeId.toString());
    formData.append('isMale', data.isMale.toString());

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
      const response = await axios.put(`${ApiEnd}/api/admin/products/${productId}`, formData, {
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
      {typeof message === 'string' && message && <p className="text-green-500 mb-4">{message}</p>}
      {typeof error === 'string' && error && <p className="text-red-500 mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block mb-2">Tên Sản Phẩm:</label>
          <input 
            {...register('productName', { required: true })}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Loại Sản Phẩm:</label>
          <Controller
            name="categoryId"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select {...field} className="w-full border rounded p-2">
                <option value="">Chọn danh mục</option>
                {categories.map((category) => (
                  <option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Giá:</label>
          <input 
            type="number" 
            step="0.01"
            {...register('price', { required: true })}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Màu kim loại:</label>
          <Controller
            name="metallicColorIds"
            control={control}
            render={({ field }) => (
              <select 
                {...field} 
                multiple 
                className="w-full border rounded p-2"
                onChange={(e) => {
                  const values = Array.from(e.target.selectedOptions).map(option => Number(option.value));
                  field.onChange(values);
                }}
                value={field.value.map(val => String(val))}
              >
                {metallicColors.map((color) => (
                  <option key={color.metallicColorId} value={color.metallicColorId}>
                    {color.colorName}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Chất Liệu:</label>
          <Controller
            name="materialId"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full border rounded p-2">
                <option value="">Chọn chất liệu</option>
                {materials.map((material) => (
                  <option key={material.materialId} value={material.materialId}>
                    {material.materialName}
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
                {ringBelts.map((belt) => (
                  <option key={belt.ringBeltId} value={belt.ringBeltId}>
                    {belt.beltType}
                  </option>
                ))}
              </select>
            )}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Hình Dạng:</label>
          <Controller
            name="shapeId"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full border rounded p-2">
                <option value="">Chọn hình dạng</option>
                {shapes.map((shape) => (
                  <option key={shape.shapeId} value={shape.shapeId}>
                    {shape.shapeName}
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
            {...register('discount')}
            className="w-full border rounded p-2"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register('isFeatured')}
            className="mr-2"
          />
          <label>Sản phẩm nổi bật</label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register('isActive')}
            className="mr-2"
          />
          <label>Sản phẩm khả dụng</label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register('isIncludeMasterDiamond')}
            className="mr-2"
          />
          <label>Bao gồm kim cương chính</label>
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            {...register('isMale')}
            className="mr-2"
          />
          <label>Sản phẩm dành cho Nam</label>
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
                    alt={`Existing image ${image.id}`} 
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button 
                    type="button"
                    onClick={() => removeExistingImage(image.id)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
                  >
                    X
                  </button>
                </div>
              ))}
            </div>
          )}
          {previews.length > 0 && (
            <div className="flex flex-wrap gap-4 mb-4">
              {previews.map((preview, index) => (
                <div key={index} className="relative">
                  <img 
                    src={preview} 
                    alt={`Preview ${index + 1}`} 
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button 
                    type="button"
                    onClick={() => removeNewImage(index)}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs"
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
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Cập Nhật Sản Phẩm
        </button>
      </form>
    </div>
  );
};

export default EditProduct;