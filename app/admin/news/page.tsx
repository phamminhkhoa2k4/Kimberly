"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface News {
    newsId: number;
    title: string;
    contentHeader?: string;
    image?: number;
    thumbnail?: number;
    contentFooter?: string;
    publishedAt?: string;
    isActive?: boolean;
}

const NewsList: React.FC = () => {
    const [news, setNews] = useState<News[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const ApiEnd = process.env.NEXT_PUBLIC_API_URL;

    const fetchNews = async () => {
        try {
            const response = await axios.get(`${ApiEnd}/admin/news`);
            setNews(response.data);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    const handleSearch = async () => {
        try {
            const response = await axios.get(`${ApiEnd}/admin/news/search`, {
                params: { title: searchTerm },
            });
            setNews(response.data);
        } catch (error) {
            console.error("Error searching news:", error);
        }
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`${ApiEnd}/admin/news/${id}`);
            fetchNews();
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    useEffect(() => {
        fetchNews();
    }, []);

    return (
        <div 
            className={cn(
                "transition-all duration-75",
                "mt-[120px] lg:mt-[140px]"
            )}
        >
            <h1 className="text-2xl font-bold mb-4">Danh Sách Tin Tức</h1>
            
            <div className="mb-4 flex items-center space-x-2">
                <input
                    type="text"
                    placeholder="Tìm Tiêu Đề"
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
                        <th className="border p-2">Tiêu Đề</th>
                        <th className="border p-2">Ngày Xuất Bản</th>
                        <th className="border p-2">Trạng Thái</th>
                        <th className="border p-2">Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((newsItem) => (
                        <tr key={newsItem.newsId} className="hover:bg-gray-50">
                            <td className="border p-2">{newsItem.title}</td>
                            <td className="border p-2">
                                {newsItem.publishedAt 
                                    ? new Date(newsItem.publishedAt).toLocaleDateString() 
                                    : 'Chưa xác định'}
                            </td>
                            <td className="border p-2">
                                {newsItem.isActive ? 'Hoạt Động' : 'Không Hoạt Động'}
                            </td>
                            <td className="border p-2 space-x-2">
                                <Link
                                    href={`/admin/news/edit/${newsItem.newsId}`}
                                    className="relative px-2 py-1 rounded-md overflow-hidden font-semibold text-[#20475d] no-underline z-10 before:absolute before:inset-0 before:bg-[#7d99b0] before:content-[''] before:scale-x-0 before:origin-right before:transition-transform before:duration-500 before:ease-in-out before:z-[-1] hover:before:scale-x-100 hover:before:origin-left hover:text-white transition-colors duration-500 ease-in-out"
                                >
                                    Sửa
                                </Link>
                                <button 
                                    onClick={() => handleDelete(newsItem.newsId)}
                                    className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Xóa
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsList;