"use client";
import React, { useState, useEffect } from "react";
import DefaultSkillForm from "./components/skill-form/DefaultSkillForm";
import axios from "axios";
import DataTypeSkill from "./types/DataType";
import LoaderDashboardData from "@/components/load-data-dashboard/LoaderData";

function page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<DataTypeSkill | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    axios
      .post("/api/skills/get-data-params", {
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
        <div className="flex justify-center items-center mt-24 py-[12%] w-full">
          <LoaderDashboardData />
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center w-full"> {error} </div>
      )}
      {data && <DefaultSkillForm data={data} />}
    </>
  );
}

export default page;
