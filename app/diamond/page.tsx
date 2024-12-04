"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Diamond/Filter";
import Result from "@/components/Diamond/Result";
import { Diamond } from "@/types/diamond";
import { useState } from "react";

const DiamondPage = () => {
  const [diamond,setDiamond] = useState<Diamond[]>([]);
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[{ title: "Trang Kim Cương", url: "/diamond" }]}
        />
        <Filter setDiamond={setDiamond} setOpenSheet={setOpenSheet} />
        <Result
          diamond={diamond}
          openSheet={openSheet}
          setOpenSheet={setOpenSheet}
        />
      </Body>
    </>
  );
};

export default DiamondPage;
