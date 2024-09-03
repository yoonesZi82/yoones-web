import { hash, compare } from "bcryptjs";
import { sign, verify } from "jsonwebtoken";
// import { cookies } from "next/headers";

const hashPassword = async (password: string) => {
  const hashedPassword = await hash(password, 12);
  return hashedPassword;
};
const verifyPassword = async (password: string, hashedPassword: string) => {
  const isValid = await compare(password, hashedPassword);
  return isValid;
};

const generateAccessToken = (data: { email: string }) => {
  const token = sign({ ...data }, process.env.AccessTokenSecretKey as string, {
    expiresIn: "24h",
  });
  return token;
};

const verifyAccessToken = (token: string) => {
  try {
    const tokenPayload = verify(
      token,
      process.env.AccessTokenSecretKey as string
    );
    return tokenPayload;
  } catch (err) {
    console.log("Verify Access Token Error --> ", err);
    return false;
  }
};

// const getCookies = async () => {
//   const token = cookies().get("token");
//   token && verifyAccessToken(token?.value as string);
//   return true;
// };

export {
  hashPassword,
  verifyPassword,
  generateAccessToken,
  verifyAccessToken,
  // getCookies,
};
