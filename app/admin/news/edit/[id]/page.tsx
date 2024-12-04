"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useParams } from "next/navigation";
import Image from "next/image";

const NewsDetailPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;
  const [news, setNews] = useState<{
    newsId: number;
    title: string;
    contentHeader: string;
    image: File | number; 
    thumbnail: File | number;
    contentFooter: string;
    publishedAt: string;
    isActive: boolean;
  }>({
    newsId: 0,
    title: "",
    contentHeader: "",
    image: 0,
    thumbnail: 0,
    contentFooter: "",
    publishedAt: "",
    isActive: false,
  });
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
const ApiEnd = process.env.NEXT_PUBLIC_API_URL;
const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  useEffect(() => {
    if (id) {
      fetchNewsDetails();
    }
  }, [id]);

  const fetchNewsDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${ApiEnd}/admin/news/${id}`);
      const newsData = response.data;

      setNews(newsData);
      setImagePreview(`${baseUrl}/image/id/${newsData.image}`);
      setThumbnailPreview(`${baseUrl}/image/id/${newsData.thumbnail}`);
    } catch (err: any) {
      setError("Failed to fetch news details.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNews((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNews((prev) => ({ ...prev, isActive: e.target.checked }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>,
    field: "image" | "thumbnail"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setNews((prev) => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = new FormData();
    data.append("title", news.title);
    data.append("contentHeader", news.contentHeader);
    if (news.image instanceof File) data.append("image", news.image);
    if (news.thumbnail instanceof File) data.append("thumbnail", news.thumbnail);
    data.append("contentFooter", news.contentFooter);
    data.append("publishedAt", news.publishedAt);
    data.append("isActive", JSON.stringify(news.isActive));

    try {
      await axios.put(`${ApiEnd}/admin/news/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("News updated successfully!");
    } catch (err: any) {
      alert("Failed to update news.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <section className="mx-auto w-10/12">
      <h1>Edit News</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block">Title:</label>
          <input
            type="text"
            name="title"
            value={news.title}
            onChange={handleInputChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Nội Dung Trên:</label>
          <textarea
            name="contentHeader"
            value={news.contentHeader}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Ảnh (1):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setImagePreview, "image")}
            className="border p-2 w-full"
          />
          {imagePreview && (
            <Image
              width={400}
              height={400}
              src={imagePreview}
              alt="Image Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block">Ảnh Tiêu Đề (1):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleFileChange(e, setThumbnailPreview, "thumbnail")
            }
            className="border p-2 w-full"
          />
          {thumbnailPreview && (
            <Image
              width={400}
              height={400}
              src={thumbnailPreview}
              alt="Thumbnail Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block">Nội Dung Dưới:</label>
          <textarea
            name="contentFooter"
            value={news.contentFooter}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Thời Gian Bất Đầu:</label>
          <input
            type="datetime-local"
            name="publishedAt"
            value={news.publishedAt}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Tin Tức Còn Hiệu Lực:</label>
          <input
            type="checkbox"
            checked={news.isActive}
            onChange={handleCheckboxChange}
            className="mr-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Sửa Nội Dung
        </button>
      </form>
    </section>
  );
};

export default NewsDetailPage;
