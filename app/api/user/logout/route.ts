import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    cookies().delete("token");
    return Response.json({ message: "User Is Logout :((" });
  } catch (err) {
    return Response.json(
      { message: `Logout error In API --> ${err}` },
      { status: 500 }
    );
  }
}
