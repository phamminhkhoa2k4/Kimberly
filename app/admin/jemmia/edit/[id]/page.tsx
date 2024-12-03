"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";

const JemmiaDetailPage: React.FC = () => {
  const params = useParams();
  const id = params.id as string;
  const [jemmia, setJemmia] = useState<{
    jemmiaId: number;
    title: string;
    contentHeader: string;
    image: File | number; 
    thumbnail: File | number;
    contentFooter: string;
    startDate: string;
    endDate: string;
    publishedAt: string;
    isActive: boolean;
  }>({
    jemmiaId: 0,
    title: "",
    contentHeader: "",
    image: 0,
    thumbnail: 0,
    contentFooter: "",
    startDate: "",
    endDate: "",
    publishedAt: "",
    isActive: false,
  });
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const ApiEnd = "http://localhost:8080";

  useEffect(() => {
    if (id) {
      fetchJemmiaDetails();
    }
  }, [id]);

  const fetchJemmiaDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${ApiEnd}/api/admin/jemmia/${id}`);
      const jemmiaData = response.data;

      setJemmia(jemmiaData);
      setImagePreview(`${ApiEnd}/image/id/${jemmiaData.image}`);
      setThumbnailPreview(`${ApiEnd}/image/id/${jemmiaData.thumbnail}`);
    } catch (err: any) {
      setError("Failed to fetch Jemmia details.");
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setJemmia((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setJemmia((prev) => ({ ...prev, isActive: e.target.checked }));
  };

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setPreview: React.Dispatch<React.SetStateAction<string | null>>,
    field: "image" | "thumbnail"
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
      setJemmia((prev) => ({ ...prev, [field]: file }));
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const data = new FormData();
    data.append("title", jemmia.title);
    data.append("contentHeader", jemmia.contentHeader);
    if (jemmia.image instanceof File) data.append("image", jemmia.image);
    if (jemmia.thumbnail instanceof File) data.append("thumbnail", jemmia.thumbnail);
    data.append("contentFooter", jemmia.contentFooter);
    data.append("startDate", jemmia.startDate);
    data.append("endDate", jemmia.endDate);
    data.append("publishedAt", jemmia.publishedAt);
    data.append("isActive", JSON.stringify(jemmia.isActive));

    try {
      await axios.put(`${ApiEnd}/api/admin/jemmia/${id}`, data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Jemmia updated successfully!");
    } catch (err: any) {
      alert("Failed to update Jemmia.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Jemmia</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block">Title:</label>
          <input
            type="text"
            name="title"
            value={jemmia.title}
            onChange={handleInputChange}
            required
            className="border p-2 w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block">Content Header:</label>
          <textarea
            name="contentHeader"
            value={jemmia.contentHeader}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setImagePreview, "image")}
            className="border p-2 w-full"
          />
          {imagePreview && (
            <img 
              src={imagePreview} 
              alt="Image Preview" 
              className="mt-2 w-32 h-32 object-cover" 
            />
          )}
        </div>
        
        <div className="mb-4">
          <label className="block">Thumbnail:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleFileChange(e, setThumbnailPreview, "thumbnail")}
            className="border p-2 w-full"
          />
          {thumbnailPreview && (
            <img
              src={thumbnailPreview}
              alt="Thumbnail Preview"
              className="mt-2 w-32 h-32 object-cover"
            />
          )}
        </div>
        
        <div className="mb-4">
          <label className="block">Content Footer:</label>
          <textarea
            name="contentFooter"
            value={jemmia.contentFooter}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block">Start Date:</label>
          <input
            type="datetime-local"
            name="startDate"
            value={jemmia.startDate}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block">End Date:</label>
          <input
            type="datetime-local"
            name="endDate"
            value={jemmia.endDate}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block">Published At:</label>
          <input
            type="datetime-local"
            name="publishedAt"
            value={jemmia.publishedAt}
            onChange={handleInputChange}
            className="border p-2 w-full"
          />
        </div>
        
        <div className="mb-4">
          <label className="block">
            <input
              type="checkbox"
              checked={jemmia.isActive}
              onChange={handleCheckboxChange}
              className="mr-2"
            />
            Is Active
          </label>
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-4 py-2 hover:bg-blue-600 transition-colors"
        >
          Update Jemmia
        </button>
      </form>
    </div>
  );
};

export default JemmiaDetailPage;