"use client";
import LatestCart from "@/components/latest/LatestCart";
import axios from "axios";
import React, { useEffect, useState } from "react";

function LatestProjects() {
  const [data, setData] = useState<[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        }
      })
      .catch((err) => setError("Can not find information 😔"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <LatestCart
      title="Projects"
      cartData={data}
      error={error}
      loading={loading}
    />
  );
}

export default LatestProjects;
