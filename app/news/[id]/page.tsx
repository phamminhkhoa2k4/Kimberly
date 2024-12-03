"use client"
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import NewsDetail from "@/components/NewsDetail";
import { News } from "@/types/news";
import { getData } from "@/utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";


const DetailNews = () => {
  const {id} = useParams();
  const [event,setEvent] = useState<News>();


  useEffect(() => {
    const fetchData = async () => {
        await getData({endpoint: `/admin/news/${id}`}).then((event) => {
          setEvent(event);
        }).catch((error) => {
          console.error(error);
          
        })
    }


    fetchData();
  },[id])
    return (
      <>
        <Body>
          <Breadcrumb
            breadcrumbs={[
              { title: "News", url: "/news" },
              { title: event?.title! , url: "#" },
            ]}
          />
          <NewsDetail event={event!} />
        </Body>
      </>
    );
}


export default DetailNews;