"use client";
import React, { useEffect, useState } from "react";
import DetailBlogPropType from "./types/DetailBlogPropType";
import { Spin } from "antd";
import GetBlogType from "./types/GetBlogType";
import axios from "axios";
import PhotoBlog from "../photo-blog/PhotoBlog";
import DescriptionBlog from "./description-blog/DescriptionBlog";
import LoaderData from "@/components/load-data/LoaderData";

const DetailBlog: React.FC<DetailBlogPropType> = ({ id }) => {
  const [blog, setBlog] = useState<GetBlogType | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .post("/api/blogs/get-blog", {
        id: id,
      })
      .then((res) => res.status === 200 && setBlog(res.data))
      .catch((err) => setError("There was a problem receiving information 😔"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading && (
        <div className="flex justify-center items-center mt-10 w-full">
          <LoaderData />
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center mt-10 w-full">
          <p className="font-medium text-2xl text-red-500">{error}</p>
        </div>
      )}
      {!loading && !error && blog && (
        <>
          <PhotoBlog src={blog.src} date={blog.date} title={blog.title} />
          <DescriptionBlog description={blog.description} />
        </>
      )}
    </>
  );
};

export default DetailBlog;
