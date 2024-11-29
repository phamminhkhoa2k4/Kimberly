
"use client"
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



const WeddingRing = () => {
  const [rings, setRings] = useState<Product[]>();
  const { products } = useLocalStorageProducts("products");
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[{ title: "Nhẫn Cưới", url: "/wedding-ring" }]}
        />
        <Banner
          imageUrl="/Banner/banner-wedding-ring.png"
          imageUrlMobile="/Banner/banner-wedding-ring-mobile.png"
        />
        <Filter
          rings={rings || []}
          isColor={true}
          isMaterial={true}
          isPrice={true}
          isGender={true}
          setRings={setRings}
          categoryName={"Nhẫn Cưới"}
        />
        <ProductBanner rings={rings ?? []} />
        {products.length > 0 && <Just products={products} />}
        <LastBanner />
      </Body>
    </>
  );
};

export default WeddingRing;