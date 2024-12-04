"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Body from "@/components/Body";

interface Product {
  productId: number;
  productName: string;
  category: {
    categoryId: number;
    categoryName: string;
    subCategories: Array<{
      categoryId: number;
      categoryName: string;
      subCategories: any[];
    }>;
  };
  price: number;
  metallicColor?: string;
  ringBelt?: string;
  material?: string;
  discount?: number;
  images?: string;
  isFeatured?: boolean;
  isActive?: boolean;
  isIncludeMasterDiamond?: boolean;
  gender?: string;
  createdAt: string;
  updatedAt?: string | null;
  shape?: string;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const ApiEnd = process.env.NEXT_PUBLIC_API_URL;

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${ApiEnd}/product/filter`);
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${ApiEnd}/product/search/${searchTerm}`,
      );
      setProducts(response.data);
    } catch (error) {
      console.error("Error searching products:", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${ApiEnd}/admin/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className="mx-auto w-10/12">
      <h1 className="text-xl font-bold my-5">Danh Sách Sản Phẩm</h1>
      <div className="flex items-center my-5 gap-5">
        <input
          type="text"
          placeholder="Tìm Tên"
          value={searchTerm}
          className="border  px-4 py-3 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="px-6 py-3 rounded-lg bg-blue-500 font-bold text-lg text-white"
        >
          Search
        </button>
        <button
          onClick={() => {
            fetchProducts();
            setSearchTerm("");
          }}
          className="px-6 py-3 rounded-lg bg-slate-500 font-bold text-lg text-white"
        >
          Reset
        </button>
        <Link
          href={"/admin/product/create"}
          className="px-6 py-3 rounded-lg bg-[#20475d] font-bold text-lg text-white"
        >
          Create
        </Link>
      </div>
      <table className="w-full border-collapse mb-10">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Price</th>
            <th className="border p-2">Material</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">Featured</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.productId} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{product.productName}</td>
              <td className="border p-2 text-center">
                {product.category.categoryName}
              </td>
              <td className="border p-2 text-center">
                ${product.price.toFixed(2)}
              </td>
              <td className="border p-2 text-center">{product.material}</td>
              <td className="border p-2 text-center">{product.gender}</td>
              <td className="border p-2 text-center">
                {product.isFeatured ? "Yes" : "No"}
              </td>
              <td className="border p-2 flex items-center gap-3 justify-center">
                <Link
                  href={`/admin/product/edit/${product.productId}`}
                  className="px-5 py-2 rounded-md overflow-hidden text-white font-semibold bg-[#20475d] "
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(product.productId)}
                  className="px-5 py-2 rounded-md overflow-hidden text-white font-semibold bg-red-500 "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProductList;
