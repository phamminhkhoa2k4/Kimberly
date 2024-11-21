"use client";
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";

const DiamondEarring = () => {
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "Bông Tai Kim Cương", url: "/diamond-earring" },
          ]}
        />
        <Banner
          imageUrl="/Banner/banner-earring.png"
          imageUrlMobile="/Banner/banner-earring-mobile.png"
        />
        <Filter isColor={true}  isGender={true} isMaterial={true} />
        <ProductBanner />
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default DiamondEarring;
