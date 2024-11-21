"use client";
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Tab from "@/components/News/Tabs";
import Image from "next/image";

const News = () => {
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
        <Tab />
        <div className="my-5 flex justify-center">
          <button className="border rounded-md py-3 px-6 font-medium">
            Xem Thêm
          </button>
        </div>
      </Body>
    </>
  );
};

export default News;
