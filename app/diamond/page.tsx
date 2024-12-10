"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Filter from "@/components/Diamond/Filter";
import Result from "@/components/Diamond/Result";

import { Diamond } from "@/types/diamond";
import { useState } from "react";

// export const metadata = {
//   title: "Kim Cương Viên",
//   description: "Kim Cương Viên",
//   keywords: ["Kimberly", "kimberly", "kim cương", "trang sức"],
// };

const DiamondPage = () => {
  const [diamond, setDiamond] = useState<Diamond[]>([]);
  const [openSheet, setOpenSheet] = useState<boolean>(false);
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[{ title: "Kim Cương Viên", url: "/diamond" }]}
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
