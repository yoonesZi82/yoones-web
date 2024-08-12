"use client";
import React, { useEffect, useState } from "react";
import LatestSkill from "../latest-skill/LatestSkill";
import axios from "axios";
import { PaginationProps } from "antd";

function Skill() {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(10);
  const [paginatedData, setPaginatedData] = useState<[]>([]);
  let pageSize = 2; // show data with current (pageSize)

  useEffect(() => {
    axios
      .get("/api/skills")
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
      .catch((err) => setError("اطلاعات یافت نشد 😔"))
      .finally(() => setLoading(false));
  }, [currentPage]);

  const currentPageNumber: PaginationProps["onShowSizeChange"] = (
    current: number
  ) => {
    setCurrentPage(current);
  };

  return (
    <>
      <LatestSkill
        title="مهارت های من"
        cartData={paginatedData}
        error={error}
        loading={loading}
        total={total}
        currentPage={currentPageNumber}
      />
    </>
  );
}

export default Skill;
