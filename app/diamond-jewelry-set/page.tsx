"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";

const DiamondJewelrySet = () => {
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "Bộ Trang Sức Kim Cương", url: "/diamond-jewelry-set" },
          ]}
        />
        <Banner
          imageUrl="/Banner/banner-pendant.png"
          imageUrlMobile="/Banner/banner-pendant-mobile.png"
        />
        <Filter isPrice={true} />
        <ProductBanner />
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default DiamondJewelrySet;
