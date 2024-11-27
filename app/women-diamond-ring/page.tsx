"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import Product from "@/components/Product";

const WomenRing = () => {
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[{ title: "Nhẫn Kim Cương Nữ", url: "/women-diamond-ring" }]}
        />
        <Banner
          imageUrl="/Banner/banner-women-ring.png"
          imageUrlMobile="/Banner/banner-women-ring-mobile.png"
        />
        <Filter  isColor={true} isMaterial={true} isType={true} isPrice={true}/>
        <Product />
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default WomenRing;
