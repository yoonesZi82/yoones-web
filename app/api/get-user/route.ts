import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return Response.json({ message: "Not authorized" }, { status: 400 });
  }

  return Response.json(
    { message: "Authorized", data: session },
    { status: 200 }
  );
}
