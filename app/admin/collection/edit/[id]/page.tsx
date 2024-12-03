"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

interface Product {
  productId: number;
  productName: string;
}

interface Collection {
  collectionId?: number;
  name: string;
  description: string;
  image?: number;
  banner?: number;
  avatar?: number;
  isActive: boolean;
  products: Product[];
}

const EditCollectionPage: React.FC = () => {
  const router = useRouter();
  const params = useParams();
  const collectionId = params.id as string;

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [banner, setBanner] = useState<File | null>(null);
  const [avatar, setAvatar] = useState<File | null>(null);
  const [isActive, setIsActive] = useState(false);
  
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [bannerPreview, setBannerPreview] = useState<string | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);

  const [imageId, setImageId] = useState<number | null>(null);
  const [bannerId, setBannerId] = useState<number | null>(null);
  const [avatarId, setAvatarId] = useState<number | null>(null);

  // Product Search Modal States
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [productSearchQuery, setProductSearchQuery] = useState("");
  const [productSearchResults, setProductSearchResults] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);

  const ApiEnd = "http://localhost:8080";

  // Function to load image from API
  const loadImageFromApi = async (imageId: number): Promise<string> => {
    try {
      const response = await axios.get(`${ApiEnd}/image/id/${imageId}`, {
        responseType: 'blob'
      });
      return URL.createObjectURL(response.data);
    } catch (err) {
      console.error("Failed to load image", err);
      return '';
    }
  };

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await axios.get(`${ApiEnd}/api/admin/collections/${collectionId}`);
        const collection = response.data;
        
        setName(collection.name);
        setDescription(collection.description || "");
        setIsActive(collection.isActive);
        
        // Set image IDs
        if (collection.image) {
          setImageId(collection.image);
          const imageUrl = await loadImageFromApi(collection.image);
          setImagePreview(imageUrl);
        }
        if (collection.banner) {
          setBannerId(collection.banner);
          const bannerUrl = await loadImageFromApi(collection.banner);
          setBannerPreview(bannerUrl);
        }
        if (collection.avatar) {
          setAvatarId(collection.avatar);
          const avatarUrl = await loadImageFromApi(collection.avatar);
          setAvatarPreview(avatarUrl);
        }
        
        // Fetch and set selected products
        if (collection.products) {
          setSelectedProducts(collection.products);
        }
      } catch (err) {
        console.error("Failed to fetch collection", err);
        alert("Failed to load collection details");
      }
    };

    if (collectionId !== "new") {
      fetchCollection();
    }
  }, [collectionId]);

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

  const handleSearchProducts = async () => {
    try {
      const response = await axios.get(`${ApiEnd}/api/admin/products/search`, {
        params: { name: productSearchQuery }
      });
      setProductSearchResults(response.data);
    } catch (err) {
      console.error("Failed to search products", err);
    }
  };

  const handleAddProduct = (product: Product) => {
    // Check if product is already selected
    if (!selectedProducts.some(p => p.productId === product.productId)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts(selectedProducts.filter(p => p.productId !== productId));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    if (image) data.append("image", image);
    if (banner) data.append("banner", banner);
    if (avatar) data.append("avatar", avatar);
    
    // Add product IDs
    selectedProducts.forEach((product) => {
      data.append(`productId`, product.productId.toString());
    });

    data.append("isActive", JSON.stringify(isActive));

    try {
      if (collectionId === "new") {
        await axios.post(`${ApiEnd}/api/admin/collections`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Collection created successfully!");
      } else {
        await axios.put(`${ApiEnd}/api/admin/collections/${collectionId}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        alert("Collection updated successfully!");
      }
      
      router.push("/collections");
    } catch (err: any) {
      alert("Failed to save collection.");
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>{collectionId === "new" ? "Create Collection" : "Edit Collection"}</h1>
      
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-4">
          <label className="block">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label className="block">Collection Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => 
              handleFileChange(e.target.files?.[0] || null, setImage, setImagePreview)
            }
            className="border p-2 w-full"
          />
          {imagePreview && (
            <img 
              src={imagePreview} 
              alt="Collection Image Preview" 
              className="mt-2 w-32 h-32 object-cover" 
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block">Banner Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => 
              handleFileChange(e.target.files?.[0] || null, setBanner, setBannerPreview)
            }
            className="border p-2 w-full"
          />
          {bannerPreview && (
            <img 
              src={bannerPreview} 
              alt="Banner Preview" 
              className="mt-2 w-32 h-32 object-cover" 
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block">Avatar Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => 
              handleFileChange(e.target.files?.[0] || null, setAvatar, setAvatarPreview)
            }
            className="border p-2 w-full"
          />
          {avatarPreview && (
            <img 
              src={avatarPreview} 
              alt="Avatar Preview" 
              className="mt-2 w-32 h-32 object-cover" 
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block">Products</label>
          <button 
            type="button"
            onClick={() => setIsProductModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 mb-2"
          >
            Add Products
          </button>

          {selectedProducts.length > 0 && (
            <div className="border p-2">
              <h3>Selected Products:</h3>
              <ul>
                {selectedProducts.map(product => (
                  <li 
                    key={product.productId} 
                    className="flex justify-between items-center mb-1"
                  >
                    {product.productName}
                    <button 
                      type="button"
                      onClick={() => handleRemoveProduct(product.productId)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mb-4">
          <label className="block">
            <input
              type="checkbox"
              checked={isActive}
              onChange={(e) => setIsActive(e.target.checked)}
              className="mr-2"
            />
            Is Active
          </label>
        </div>

        <button 
          type="submit" 
          className="bg-green-500 text-white px-4 py-2"
        >
          {collectionId === "new" ? "Create Collection" : "Update Collection"}
        </button>
      </form>

      {/* Product Search Modal - Same as before */}
      {isProductModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl mb-4">Search Products</h2>
            <div className="flex mb-4">
              <input
                type="text"
                value={productSearchQuery}
                onChange={(e) => setProductSearchQuery(e.target.value)}
                placeholder="Search product by name"
                className="border p-2 w-full mr-2"
              />
              <button
                onClick={handleSearchProducts}
                className="bg-blue-500 text-white px-4 py-2"
              >
                Search
              </button>
            </div>

            {productSearchResults.length > 0 && (
              <div className="max-h-64 overflow-y-auto">
                <h3>Search Results:</h3>
                <ul>
                  {productSearchResults.map(product => (
                    <li 
                      key={product.productId}
                      className="flex justify-between items-center mb-2 p-2 border"
                    >
                      {product.productName}
                      <button
                        onClick={() => handleAddProduct(product)}
                        className="bg-green-500 text-white px-2 py-1"
                      >
                        Add
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="bg-gray-300 text-black px-4 py-2 mr-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditCollectionPage;