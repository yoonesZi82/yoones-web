"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TableSkill from "../../components/tabel/TableSkill";

interface BlogData {
  key: string;
  tag: string;
  photo: string;
  date: string;
  rate: number;
}
function TablePage() {
  const [data, setData] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/skills/skills-data")
      .then((res) => res.status === 200 && setData(res.data))
      .catch((err) => setError("There was a problem receiving information"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <TableSkill dataSource={data} error={error} loading={loading} />
    </div>
  );
}

export default TablePage;
