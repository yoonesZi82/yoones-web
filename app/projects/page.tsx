"use client";
import BreadCrumb from "@/components/breadcrump/BreadCrump";
import LatestCart from "@/components/latest/LatestCart";
import { PaginationProps } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";

function page() {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(10);
  const [paginatedData, setPaginatedData] = useState<[]>([]);
  let pageSize = 8; // show data with current (pageSize)

  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        if (res.data) {
          const pageCount = Math.ceil(res.data.length / pageSize) * 10;
          setTotal(pageCount);
        }
        const endIndex = currentPage * pageSize;
        const startIndex = endIndex - pageSize;
        const allShowData = res.data.slice(startIndex, endIndex);
        setPaginatedData(allShowData);
      })
      .catch((err) => setError("Can not find information 😔"))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const currentPageNumber: PaginationProps["onShowSizeChange"] = (
    current: number
  ) => {
    setCurrentPage(current);
  };

  return (
    <>
      <div className="pt-10 w-full">
        <BreadCrumb />
      </div>
      <LatestCart
        title="Projects"
        cartData={paginatedData}
        error={error}
        loading={loading}
        total={total}
        currentPage={currentPageNumber}
      />
    </>
  );
}

export default page;
