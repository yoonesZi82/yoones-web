import MessageModel from "@/models/Message";

export async function GET() {
  try {
    const message = await MessageModel.find({}, "-__v")
      .sort({ _id: -1 })
      .lean();
    if (!message) {
      return Response.json(
        { message: "Message not found :((" },
        { status: 404 }
      );
    }

    return Response.json(message, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error in Get Message --> ${err}` },
      { status: 500 }
    );
  }
}
