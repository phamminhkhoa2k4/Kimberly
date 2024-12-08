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
  const [related, setRelated] = useState<Product[]>([]);
  const { id } = useParams();
  const { products ,addProduct } = useLocalStorageProducts("products");

  useEffect(() => {
    const fetchData = async () => {
      await getData({ endpoint: `/product/${id}` }).then((pro) => {
        setProduct(pro);
        addProduct(pro);
      });
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      await getData({ endpoint: `/product/related/${id}` }).then((product) => {
        setRelated(product);
      });
    };

    fetchData();
  }, [id]);

  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "Product", url: "#" },
            { title: product?.productName!, url: "#" },
          ]}
        />
        <ProductDetail product={product!} />
        {related.length > 0 && <Relative products={related} />}
        {products.length > 0 && <Just products={products} />}
      </Body>
    </>
  );
};

export default Detail;
