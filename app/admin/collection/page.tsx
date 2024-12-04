"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Collection {
    collectionId: number;
    name: string;
    description?: string;
    image?: number;
    banner?: number;
    avatar?: number;
    isActive?: boolean;
}

const CollectionList: React.FC = () => {
    const [collections, setCollections] = useState<Collection[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const ApiEnd = process.env.NEXT_PUBLIC_API_URL;
    const fetchCollections = async () => {
      try {
        const response = await axios.get(`${ApiEnd}/admin/collections`);
        setCollections(response.data);
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${ApiEnd}/admin/collections/search`, {
                params: { name: searchTerm },
            });
            setCollections(response.data);
        } catch (error) {
            console.error("Error searching collections:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${ApiEnd}/admin/collections/${id}`);
            fetchCollections();
        } catch (error) {
            console.error("Error deleting collection:", error);
        }
    };

    useEffect(() => {
      fetchCollections();
    }, [fetchCollections]);

    return (
      <section className="mx-auto w-10/12">
        <h1 className="text-2xl font-bold mb-4">Danh Sách Bộ Sưu Tập</h1>

        <div className="mb-4 flex items-center space-x-2">
          <input
            type="text"
            placeholder="Tìm Tên Bộ Sưu Tập"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="px-2 py-1 border rounded"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Tìm Kiếm
          </button>
        </div>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Tên Bộ Sưu Tập</th>
              <th className="border p-2">Mô Tả</th>
              <th className="border p-2">Trạng Thái</th>
              <th className="border p-2">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <tr key={collection.collectionId} className="hover:bg-gray-50">
                <td className="border p-2">{collection.name}</td>
                <td className="border p-2">
                  {collection.description
                    ? collection.description.length > 50
                      ? `${collection.description.substring(0, 50)}...`
                      : collection.description
                    : "Không có mô tả"}
                </td>
                <td className="border p-2">
                  {collection.isActive ? "Hoạt Động" : "Không Hoạt Động"}
                </td>
                <td className="border p-2 space-x-2">
                  <Link
                    href={`/admin/collection/edit/${collection.collectionId}`}
                    className="relative px-2 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                  >
                    Sửa
                  </Link>
                  <button
                    onClick={() => handleDelete(collection.collectionId)}
                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
};

export default CollectionList;