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
  let pageSize = 8; // show data with current (pageSize)

  useEffect(() => {
    axios
      .get("https://theapicompany.com/deviceAPI2.js?id=deviceAPI-123456")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  });
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
      .catch((err) => setError("Can not find Information 😔"))
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
        title="My Skills"
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
