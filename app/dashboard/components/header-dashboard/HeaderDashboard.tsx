"use client";
import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import { JwtPayload } from "jsonwebtoken";
import axios from "axios";
import { useSession } from "next-auth/react";
import GetNowDate from "@/utils/GetNowDate";
const { Header } = Layout;

interface HeaderDashboardPropsType {
  tokenPayload?: JwtPayload | null;
}

const HeaderDashboard: React.FC<HeaderDashboardPropsType> = ({
  tokenPayload,
}) => {
  const { data: session } = useSession();
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const [error, setError] = useState<string>("");
  useEffect(() => {
    axios
      .post("/api/user/token", {
        email: tokenPayload?.email,
      })
      .then((res) => res.status === 200 && setUser(res.data))
      .catch((err) => setError("Not get user by token"));
  }, []);
  return (
    <Header className="flex justify-center items-center bg-[#000]">
      <div className="flex justify-between items-center w-full">
        {user ? (
          <h1 className="font-medium text-3xl text-meloWhite">
            Welcome {user?.name}✌️
          </h1>
        ) : session ? (
          <h1 className="font-medium text-3xl text-meloWhite">
            Welcome {session?.user?.name}✌️
          </h1>
        ) : (
          "ADMIN"
        )}
        <p className="font-medium text-2xl text-meloWhite">
          {GetNowDate() as string}{" "}
        </p>
      </div>
    </Header>
  );
};

export default HeaderDashboard;
