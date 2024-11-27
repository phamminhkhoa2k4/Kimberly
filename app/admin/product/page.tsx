"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { cn } from "@/lib/utils";


interface Product {
    productId: number;
    productName: string;
    price: number;
    metallicColor?: string;
    ringBelt?: string;
    material?: string;
    discount?: number;
    images?: string;
    isFeatured?: boolean;
    isActive?: boolean;
    createdAt: string;
    updatedAt?: string;
}

const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    //   const navigate = useNavigate(); // useNavigate để điều hướng

    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/admin/products");
            setProducts(response.data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get("http://localhost:8080/api/admin/products/search", {
                params: { name: searchTerm },
            });
            setProducts(response.data);
        } catch (error) {
            console.error("Error searching products:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8080/api/admin/products/${id}`);
            fetchProducts(); // Refresh the product list
        } catch (error) {
            console.error("Error deleting product:", error);
        }
    };

    //   const handleEdit = (id: number) => {
    //     navigate(`/admin/product/edit/${id}`); // Điều hướng đến trang chỉnh sửa
    //   };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div
        className={cn(
          "transition-all duration-75 ",
          scrollY > 70 ? "lg:mt-[57px]" : "mt-[120px] lg:mt-[140px]"
        )}
      >
            <h1>Danh Sách Sản Phẩmt</h1>
            <div>
                <input
                    type="text"
                    placeholder="Tìm Tên"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.productId}>
                            <td>{product.productName}</td>
                            <td>${product.price.toFixed(2)}</td>
                            <td>
                                <Link
                                    href={`/admin/product/edit/${product.productId}`}
                                    className="relative px-2 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                                >
                                    Edit
                                </Link>
                                {/* <button onClick={() => handleEdit(product.productId)}>Edit</button> */}
                                <button onClick={() => handleDelete(product.productId)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ProductList;
