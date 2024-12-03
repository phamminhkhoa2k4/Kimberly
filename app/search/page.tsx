"use client";

import Body from "@/components/Body";
import Breadcrumb from "@/components/Breadcrumb";
import Product from "@/components/Product";
import { Product as Products } from "@/types/product";
import { getData } from "@/utils/axios";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [result, setResult] = useState<Products[]>();

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        try {
          const data = await getData({ endpoint: `/product/search/${query}` });
          setResult(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
          setResult([]);
        }
      }
    };

    fetchResults();
  }, [query]);

  return (
    <Body>
      <Breadcrumb breadcrumbs={[{ title: "Tìm Kiếm", url: "#" }]} />
      <div className="text-center text-2xl my-10 font-bold">Tìm Kiếm</div>
      <div className="lg:mx-auto lg:w-3/4 mx-5 my-3">
        Kết quả tìm kiếm cho <strong>&quot;{query}&quot;</strong>
      </div>
      {result ? (
        <Product products={result} />
      ) : (
        <div>Loading search results...</div>
      )}
    </Body>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div>Loading search page...</div>}>
      <SearchContent />
    </Suspense>
  );
}
