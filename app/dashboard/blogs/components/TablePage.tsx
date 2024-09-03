"use client";
import React, { useEffect, useState } from "react";
import TableBlogs from "../../components/tabel/TabelBlog";
import axios from "axios";

interface BlogData {
  key: string;
  title: string;
  tag: string;
  photo: string;
  date: string;
  description: string;
}
function TablePage() {
  const [data, setData] = useState<BlogData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/blogs/blogs-data")
      .then((res) => res.status === 200 && setData(res.data))
      .catch((err) => setError("There was a problem receiving information"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <TableBlogs dataSource={data} error={error} loading={loading} />
    </div>
  );
}

export default TablePage;
