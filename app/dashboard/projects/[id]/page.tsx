"use client";
import React, { useState, useEffect } from "react";
import DefaultProjectForm from "./components/project-form/DefaultProjectForm";
import { nullable } from "zod";
import axios from "axios";
import DataTypeProject from "./types/DataType";
import LoaderData from "@/components/load-data/LoaderData";

function page({ params }: { params: { id: string } }) {
  const [data, setData] = useState<DataTypeProject | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  useEffect(() => {
    axios
      .post("/api/projects/get-data-params", {
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
        <div className="flex justify-center items-center w-full h-fit">
          <LoaderData />
        </div>
      )}
      {error && (
        <div className="flex justify-center items-center w-full"> {error} </div>
      )}
      {data && <DefaultProjectForm data={data} />}
    </>
  );
}

export default page;
