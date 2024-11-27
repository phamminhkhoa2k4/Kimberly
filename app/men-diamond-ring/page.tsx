"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";

const MenRing = () => {
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "Nhẫn Kim Cương Nam", url: "/men-diamond-ring" },
          ]}
        />
        <Banner
          imageUrl="/Banner/banner-men-ring.png"
          imageUrlMobile="/Banner/banner-men-ring-mobile.png"
        />
        <Filter isColor={true} isType={true} isMaterial={true} isPrice={true}/>
        <ProductBanner />
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default MenRing;
