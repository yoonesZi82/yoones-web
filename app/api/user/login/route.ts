import UserModel from "@/models/User";
import { generateAccessToken, verifyPassword } from "@/utils/auth";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, password } = body;
    if (!email || !password) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    if (!email.trim() || !password.trim() || password.length < 8) {
      return Response.json(
        { message: " Email Or Password Is Not Correct" },
        { status: 203 }
      );
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    const isMatch = await verifyPassword(password, user.password);
    if (!isMatch) {
      return Response.json(
        { message: "Email or password is not correct" },
        { status: 401 }
      );
    }

    const accessToken = generateAccessToken({ email });
    const headers = new Headers();
    headers.append("Set-Cookie", `token=${accessToken};path=/;httpOnly=true;`);

    return Response.json(
      { message: "Your login successful" },
      { status: 200, headers }
    );
  } catch (err) {
    return Response.json(
      { message: `Unknown Error in Login --> ${err}` },
      { status: 500 }
    );
  }
}
