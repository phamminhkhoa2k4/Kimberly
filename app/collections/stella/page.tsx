"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";
import useLocalStorageProducts from "@/hooks/useLocalStorageProducts";
import { Collection } from "@/types/collection";
import { getData } from "@/utils/axios";
import { useEffect, useState } from "react";

const CollectionStella = () => {
  const [collection, setCollection] = useState<Collection>();
  const { products } = useLocalStorageProducts("products");

  useEffect(() => {
    const fetch = async () => {
      await getData({ endpoint: "/admin/collections/1" }).then((coll) => {
        setCollection(coll);
      });
    };
    fetch();
  }, []);

  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            {
              title: collection?.name!,
              url: "/collections/stella",
            },
          ]}
        />
        <Banner
          imageUrl="/Banner/banner-bracelet.png"
          imageUrlMobile="/Banner/banner-bracelet-mobile.png"
        />
        <div className="my-20"/>
        <ProductBanner rings={Array.from(collection?.products || [])} />
        {products.length > 0 && <Just products={products} />}
        <LastBanner />
      </Body>
    </>
  );
};

export default CollectionStella;
