"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";
import { calculateFilters } from "@/constans/calculateFilters";
import useLocalStorageProducts from "@/hooks/useLocalStorageProducts";
import { Product } from "@/types/product";
import { useState } from "react";

const DiamondRing = () => {
  const [rings, setRings] = useState<Product[]>([]);
  const { products } = useLocalStorageProducts("products");
  const filters = calculateFilters(rings);
  const [count, setCount] = useState<number>(1);
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[{ title: "Nhẫn Kim Cương", url: "/diamond-ring" }]}
        />
        <Banner
          imageUrl="/Banner/banner-pendant.png"
          imageUrlMobile="/Banner/banner-pendant-mobile.png"
        />
        <Filter
          rings={rings || []}
          isColor={filters.isColor}
          isMaterial={filters.isMaterial}
          isPrice={filters.isPrice}
          isGender={true}
          setRings={setRings}
          categoryName={"Nhẫn"}
          count={count}
        />
        <ProductBanner rings={rings ?? []} setCount={setCount} count={count} />
        {products.length > 0 && <Just products={products} />}
        <LastBanner />
      </Body>
    </>
  );
};

export default DiamondRing;
