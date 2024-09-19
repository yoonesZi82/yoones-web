import MessageModel from "@/models/Message";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { text, name, email, phone } = body;

    if (!text || !name || !email || !phone) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    if (
      typeof text !== "string" ||
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof phone !== "string"
    ) {
      return Response.json({ message: "Invalid data type" }, { status: 401 });
    }

    await MessageModel.create({
      text: `${text.charAt(0).toUpperCase()}${text.slice(1)}`,
      name: `${name.charAt(0).toUpperCase()}${name.slice(1)}`,
      email,
      phone,
    });

    return Response.json(
      { message: "Message created successfully" },
      { status: 201 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unknown error in create message API --> ${err}` },
      { status: 500 }
    );
  }
}
