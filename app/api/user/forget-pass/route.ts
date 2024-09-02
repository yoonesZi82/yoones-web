import UserModel from "@/models/User";
import bcrypt from "bcryptjs";

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { email, password, newPassword } = body;

    if (!email || !password || !newPassword) {
      return Response.json(
        { message: "All filed is required" },
        { status: 400 }
      );
    }

    if (password) {
      const user = await UserModel.findOne({ email });
      if (user) {
        const checkOldPassword = await bcrypt.compare(password, user.password);
        if (!checkOldPassword) {
          return Response.json(
            { message: "The old password you entered is incorrect" },
            { status: 401 }
          );
        }
        if (password === newPassword) {
          return Response.json(
            {
              message:
                "The old password should not be equal to the new password",
            },
            { status: 402 }
          );
        }
      } else {
        return Response.json({ message: "User not found" }, { status: 404 });
      }
    }

    const hashNewPassword = await bcrypt.hash(newPassword, 12);

    await UserModel.findOneAndUpdate(
      { email },
      {
        $set: {
          password: hashNewPassword,
        },
      }
    );
    return Response.json(
      { message: "Password changed successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unknown error in forget password API --> ${err}` },
      { status: 500 }
    );
  }
}
