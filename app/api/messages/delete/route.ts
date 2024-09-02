import MessageModel from "@/models/Message";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { key } = body;

    if (!key) {
      return Response.json(
        { message: "Key is not valid :((" },
        { status: 403 }
      );
    }
    if (typeof key !== "string") {
      return Response.json(
        { message: "Key is not string :((" },
        { status: 403 }
      );
    }
    await MessageModel.findOneAndDelete({ key });
    return Response.json({ message: "Delete message successfully" });
  } catch (err) {
    return Response.json(
      { message: `Unknown error in delete message API --> ${err}` },
      { status: 500 }
    );
  }
}
