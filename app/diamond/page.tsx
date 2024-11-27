"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Diamond/Filter";
import Result from "@/components/Diamond/Result";

const Diamond = () => {
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[{ title: "Trang Kim Cương", url: "/diamond" }]}
        />
        <Filter />
        <Result />
      </Body>
    </>
  );
};

export default Diamond;
