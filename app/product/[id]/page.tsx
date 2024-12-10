"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Just from "@/components/Just";
import Loading from "@/components/Loading/loading";
import ProductDetail from "@/components/ProductDetail";
import Relative from "@/components/Relative";
import useLocalStorageProducts from "@/hooks/useLocalStorageProducts";
import { Product } from "@/types/product";
import { getData } from "@/utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Chi tiết sản phẩm",
//   description: "Chi tiết sản phẩm",
//   keywords: ["Kimberly", "kimberly", "kim cương", "trang sức"],
// };


const Detail = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();
  const [related, setRelated] = useState<Product[]>([]);
  const { id } = useParams();
  const { products ,addProduct } = useLocalStorageProducts("products");


  useEffect(() => {
    setIsLoading(false);
    const fetchData = async () => {
      await getData({ endpoint: `/product/${id}` })
        .then((pro) => {
          setProduct(pro);
          addProduct(pro);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(true);
        });
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    setIsLoading(false);
    const fetchData = async () => {
      await getData({ endpoint: `/product/related/${id}` })
        .then((product) => {
          setRelated(product);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setIsLoading(true);
        });
    };

    fetchData();
  }, [id]);

  return (
    <>
      {isLoading && (<Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "Product", url: "#" },
            { title: product?.productName!, url: "#" },
          ]}
        />
        <ProductDetail product={product!} />
        {related.length > 0 && <Relative products={related} />}
        {products.length > 0 && <Just products={products} />}
      </Body>)}
      {!isLoading && (<Loading/>)}
      
    </>
  );
};

export default Detail;
