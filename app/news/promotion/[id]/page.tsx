"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import NewsDetail from "@/components/NewsDetail";
import PromotionDetail from "@/components/PromotionDetail/page";
import { Promotion } from "@/types/promotion";
import { getData } from "@/utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const DetailNews = () => {
  const { id } = useParams();
  const [promotion, setPromotion] = useState<Promotion>();

  useEffect(() => {
    const fetchData = async () => {
      await getData({ endpoint: `/admin/jemmia/${id}` })
        .then((promotion) => {
          setPromotion(promotion);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    fetchData();
  }, []);
  return (
    <>
      <Body>
        <Breadcrumb
          breadcrumbs={[
            { title: "News", url: "/news" },
            { title: promotion?.title!, url: "#" },
          ]}
        />
        <PromotionDetail promotion={promotion!} />
      </Body>
    </>
  );
};

export default DetailNews;
