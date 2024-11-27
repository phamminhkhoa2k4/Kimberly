"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import Product from "@/components/Product";

const CollectionStella = () => {
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            {
              title: "Bộ Sưu Tập Stella",
              url: "/collections/stella",
            },
          ]}
        />
        <Banner
          imageUrl="/Banner/banner-bracelet.png"
          imageUrlMobile="/Banner/banner-bracelet-mobile.png"
        />
        <Filter/>
        <Product/>
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default CollectionStella;
