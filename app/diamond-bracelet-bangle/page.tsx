"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";

const DiamondBraceletBangle= () => {
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
        <Filter isColor={true} isGender={true} isMaterial={true} isPrice={true}/>
        <ProductBanner />
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default DiamondBraceletBangle;
