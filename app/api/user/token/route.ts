import UserModel from "@/models/User";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email } = body;

    if (!email) {
      return Response.json({ message: "Email is required" }, { status: 400 });
    }

    const user = await UserModel.findOne({ email }, "name email");
    if (!user) {
      return Response.json({ message: "User not found" }, { status: 404 });
    }

    return Response.json(user, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown error in get user by token --> ${err}` },
      { status: 500 }
    );
  }
}
