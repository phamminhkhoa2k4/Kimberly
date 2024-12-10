"use client";
import { News } from "@/types/news";
import { getData } from "@/utils/axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Discovery = () => {
  const [events, setEvents] = useState<News[]>([]);

  useEffect(() => {
    const fetch = async () => {
      await getData({ endpoint: "/admin/news" }).then((data) => {
        setEvents(data);
      });
    };

    fetch();
  }, []);

  const baseUrl = process.env.BASE_URL || "http://localhost:8080";
  return (
    <>
      <section>
        <div className="text-2xl my-5 mt-20 text-[#20475d] font-semibold text-center">
          Khám Phá
        </div>
        <div className="bg-slate-50 lg:py-20">
          <div className="mx-auto lg:w-5/6 flex items-center  justify-between">
            {events?.slice(0, 2).map((event,index) => (
              <Link href={`/news/${event?.newsId}`} key={index} className="bg-white">
                <Image
                  src={`${baseUrl}/images/id/${event?.thumbnail}`}
                  alt=""
                  height={367}
                  width={560}
                  className="object-cover lg:h-[380px] lg:w-[560px] object-center p-4"
                />
                <p className="px-4 pb-4 text-base capitalize font-medium text-[#20475d]">
                  {event?.title}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Discovery;
