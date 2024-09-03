"use client";
import React, { useState, useEffect } from "react";
import DefaultBlogForm from "./components/blog-form/DefaultBlogForm";
import axios from "axios";
import DetailBlogType from "./components/blog-form/types/DetailBlogType";
import LoaderData from "@/components/load-data/LoaderData";

function page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<DetailBlogType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    axios
      .post("/api/blogs/get-data-params", {
        params: params.id,
      })
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [params.id]);

  return (
    <>
      {loading && (
        <div className="flex justify-center items-center w-full">
          <LoaderData />
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center w-full"> {error} </div>
      )}
      {data && <DefaultBlogForm data={data} />}
    </>
  );
}

export default page;
