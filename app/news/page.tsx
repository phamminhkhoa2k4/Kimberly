"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Tab from "@/components/News/Tabs";
import { News } from "@/types/news";
import { Promotion } from "@/types/promotion";
import { getData } from "@/utils/axios";
import Image from "next/image";
import { useEffect, useState } from "react";

// export const metadata = {
//   title: "Tin Tức",
//   description: "Tin Tức",
//   keywords: ["Kimberly", "kimberly", "kim cương", "trang sức"],
// };


const NewsPage = () => {
  const [events,setEvents] = useState<News[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>([]);



  useEffect(() => {
    const fetchData = async () => {
        await getData({ endpoint: `/admin/news` }).then((event) => {
          setEvents(event);
        }).catch((error) => {
          console.error(error);
        }).finally()


        await getData({ endpoint: `/admin/jemmia` })
          .then((promotion) => {
            setPromotions(promotion);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally();
    }
    fetchData();
  },[])
  return (
    <>
      <Body>
        <Breadcrumb breadcrumbs={[{ title: "Tin Tức", url: "/news" }]} />
        <section className="lg:mx-auto mx-5 lg:w-3/4 h-[103px] lg:h-[394px] mt-5">
          <Image
            src={"/Banner/banner-bracelet.png"}
            alt=""
            height={538}
            width={2048}
            className="object-cover w-full h-full object-center"
          />
        </section>
        <Tab events={events} promotions={promotions!}/>

        {events?.length > 1 && (
          <div className="my-5 flex justify-center">
            <button className="border rounded-md py-3 px-6 font-medium">
              Xem Thêm
            </button>
          </div>
        )}
      </Body>
    </>
  );
};

export default NewsPage;
