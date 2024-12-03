"use client"
import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Product from "@/components/Product";
import { Product as Products } from "@/types/product";
import { getData } from "@/utils/axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();

  const query = searchParams.get("q");
  const [result, setResult] = useState<
    Products[]
  >();

  useEffect(() => {
    const fetch = async () => {
      await getData({ endpoint: `/product/search/${query}` }).then((data) => {
        setResult(data);
      });
    };

    fetch();
  }, [query]);
  return (
    <>
      <Body>
        <Breadcrumb breadcrumbs={[{ title: "Tìm Kiếm", url: "#" }]} />
        <div className="text-center text-2xl my-10 font-bold">Tìm Kiếm</div>
        <div className="lg:mx-auto lg:w-3/4 mx-5 my-3">
          Kết quả tìm kiếm cho <strong>"{query}"</strong>
        </div>
        <Product products={result!} />
      </Body>
    </>
  );
};

export default Search;
