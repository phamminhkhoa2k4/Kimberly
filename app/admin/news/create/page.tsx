"use client";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";

const CreateNewsPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [contentHeader, setContentHeader] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [contentFooter, setContentFooter] = useState("");
  const [publishedAt, setPublishedAt] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
const ApiEnd="http://localhost:8080"
  const handleFileChange = (
    file: File | null,
    setFile: React.Dispatch<React.SetStateAction<File | null>>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    if (file) {
      setFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setFile(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError(null);
    setSuccessMessage(null);

    const data = new FormData();
    data.append("title", title);
    data.append("contentHeader", contentHeader);
    if (image) data.append("image", image);
    if (thumbnail) data.append("thumbnail", thumbnail);
    data.append("contentFooter", contentFooter);
    data.append("publishedAt", publishedAt);
    data.append("isActive", JSON.stringify(isActive));

    try {
      const response = await axios.post(`${ApiEnd}/news`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("News created successfully!");
    } catch (err: any) {
      if (err.response?.data?.error) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Create News</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Ảnh Tiêu Đề:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleFileChange(
                e.target.files?.[0] || null,
                setThumbnail,
                setThumbnailPreview
              )
            }
            className="border p-2 w-full"
          />
          {thumbnailPreview && (
            <Image
              height={400}
              width={400}
              src={thumbnailPreview}
              alt="Thumbnail Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>
        <div className="mb-4">
          <label className="block">Nội Dung Đầu:</label>
          <textarea
            value={contentHeader}
            onChange={(e) => setContentHeader(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Ảnh (1):</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) =>
              handleFileChange(
                e.target.files?.[0] || null,
                setImage,
                setImagePreview
              )
            }
            className="border p-2 w-full"
          />
          {imagePreview && (
            <Image
              height={400}
              width={400}
              src={imagePreview}
              alt="Image Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block">Nội Dung Dưới:</label>
          <textarea
            value={contentFooter}
            onChange={(e) => setContentFooter(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Ngày Bất Đầu:</label>
          <input
            type="datetime-local"
            value={publishedAt}
            onChange={(e) => setPublishedAt(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label className="block">Tin Tức Còn Hiệu Lực:</label>
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="mr-2"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Tạo Tin Tức
        </button>
      </form>
    </div>
  );
};

export default CreateNewsPage;
