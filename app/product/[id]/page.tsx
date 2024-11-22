"use client"
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Just from "@/components/Just";
import ProductDetail from "@/components/ProductDetail";
import Relative from "@/components/Relative";

const Detail = () => {
    return (
      <>
        <Body>
          <Breadcrumb
            breadcrumbs={[
              { title: "Product", url: "/diamond-pendant" },
              { title: "Mặt Dây Chuyền Kim Cương", url: "/diamond-pendant" },
            ]}
          />
          <ProductDetail />
          <Relative />
          <Just />
        </Body>
      </>
    );
}


export default Detail;