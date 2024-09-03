"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import TableMessage from "../../components/tabel/TableMessage";

interface MessageData {
  key: string;
  text: string;
  phone: string;
  name: string;
  email: string;
  date: string;
}
function TablePage() {
  const [data, setData] = useState<MessageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/messages/message-data")
      .then((res) => res.status === 200 && setData(res.data))
      .catch((err) => setError("There was a problem receiving information"))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <TableMessage dataSource={data} error={error} loading={loading} />
    </div>
  );
}

export default TablePage;
