"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";

const DiamondPendant = () => {
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "Mặt Dây Chuyền Kim Cương", url: "/diamond-pendant" },
          ]}
        />
        <Banner
          imageUrl="/Banner/banner-pendant.png"
          imageUrlMobile="/Banner/banner-pendant-mobile.png"
        />
        <Filter isColor={true} isGender={true} isMaterial={true} isPrice={true} />
        <ProductBanner />
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default DiamondPendant;
