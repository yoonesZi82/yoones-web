"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TableProject from "../../components/tabel/TableProject";

interface BlogData {
  key: string;
  title: string;
  tag: string;
  photo: string;
  date: string;
  link: string;
}
function TablePage() {
  const [data, setData] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/projects/projects-data")
      .then((res) => res.status === 200 && setData(res.data))
      .catch((err) => setError("There was a problem receiving information"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <TableProject dataSource={data} error={error} loading={loading} />
    </div>
  );
}

export default TablePage;
