import UserModel from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }
    const oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return Response.json({ message: "User already exists" }, { status: 401 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });
    return Response.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unknown error in Create User --> ${err}` },
      { status: 500 }
    );
  }
}
