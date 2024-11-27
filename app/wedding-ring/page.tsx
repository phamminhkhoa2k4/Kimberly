
"use client"
import Banner from "@/components/Banner";
import LastBanner from "@/components/Banner/LastBanner";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Filter";
import Just from "@/components/Just";
import ProductBanner from "@/components/productBanner";



const WeddingRing = () => {
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
        <Filter isMaterial={true} isColor={true} isGender={true} isPrice={true}/>
        <ProductBanner />
        <Just />
        <LastBanner />
      </Body>
    </>
  );
};

export default WeddingRing;