"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Diamond/Filter";
import Result from "@/components/Diamond/Result";
import { Diamond } from "@/types/diamond";
import { useState } from "react";

const DiamondPage = () => {
  const [diamond,setDiamond] = useState<Diamond[]>([]);
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[{ title: "Trang Kim Cương", url: "/diamond" }]}
        />
        <Filter setDiamond={setDiamond} />
        <Result diamond={diamond} />
      </Body>
    </>
  );
};

export default DiamondPage;
