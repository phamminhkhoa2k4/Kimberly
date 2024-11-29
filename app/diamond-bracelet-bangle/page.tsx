"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";
import useLocalStorageProducts from "@/hooks/useLocalStorageProducts";
import { Product } from "@/types/product";
import { useState } from "react";

const DiamondBraceletBangle= () => {
  const [rings, setRings] = useState<Product[]>();
  const { products } = useLocalStorageProducts("products");
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            {
              title: "Lắc & Vòng Tay Kim Cương",
              url: "/diamond-bracelet-bangle",
            },
          ]}
        />
        <Banner
          imageUrl="/Banner/banner-bracelet.png"
          imageUrlMobile="/Banner/banner-bracelet-mobile.png"
        />
        <Filter
          rings={rings || []}
          isColor={true}
          isMaterial={true}
          isPrice={true}
          setRings={setRings}
          categoryName={"Vòng Tay"}
        />
        <ProductBanner rings={rings ?? []} />
        {products.length > 0 && <Just products={products} />}
        <LastBanner />
      </Body>
    </>
  );
};

export default DiamondBraceletBangle;
