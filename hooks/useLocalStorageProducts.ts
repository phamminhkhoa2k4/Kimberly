import { Product } from "@/types/product";
import { useState, useEffect } from "react";



const useLocalStorageProducts = (key: string) => {
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    const storedProducts = localStorage.getItem(key);
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [key]);


  const addProduct = (product: Product) => {
    setProducts((prevProducts) => {
      const storedProducts = JSON.parse(localStorage.getItem(key) || "[]");
      const exists = storedProducts.some(
        (p: Product) => p.productId === product.productId
      );

      if (exists) {
        console.warn("Product already exists:", product.productId);
        return prevProducts; 
      }

      const updatedProducts = [...storedProducts, product];
      localStorage.setItem(key, JSON.stringify(updatedProducts)); 
      return updatedProducts; 
    });
  };

  return { products, addProduct };
};

export default useLocalStorageProducts;
