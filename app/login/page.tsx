import React from "react";
import LoginForm from "./components/login-form/LoginForm";
import { cookies } from "next/headers";
import { verifyAccessToken } from "@/utils/auth";
import { JwtPayload } from "jsonwebtoken";

async function page() {
  const token = cookies().get("token");
  let tokenPayload = null;
  if (token) {
    tokenPayload = verifyAccessToken(token.value as string) as JwtPayload;
  }

  return (
    <div>
      <LoginForm tokenPayload={tokenPayload} />
    </div>
  );
}

export default page;
