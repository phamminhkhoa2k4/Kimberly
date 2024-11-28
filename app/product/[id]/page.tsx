"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Just from "@/components/Just";
import ProductDetail from "@/components/ProductDetail";
import Relative from "@/components/Relative";
import useLocalStorageProducts from "@/hooks/useLocalStorageProducts";
import { Product } from "@/types/product";
import { getData } from "@/utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Detail = () => {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();
  const { products ,addProduct } = useLocalStorageProducts("products");

  useEffect(() => {
    const fetchData = async () => {
      await getData({ endpoint: `/admin/products/${id}` })
      .then((pro) => {
        setProduct(pro);
        addProduct(pro);
      });
    };

    fetchData();
  }, []);

  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "Product", url: "/diamond-pendant" },
            { title: product?.productName!, url: "#" },
          ]}
        />
        <ProductDetail product={product!} />
        <Relative id={String(id)}/>
        {products.length > 0 && <Just products={products} />}
      </Body>
    </>
  );
};

export default Detail;
