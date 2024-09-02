import BlogModel from "@/models/Blog";

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
    await BlogModel.findOneAndDelete({ key });
    return Response.json({ message: "Delete blog successfully :))" });
  } catch (err) {
    return Response.json(
      { message: `Unknown error in delete blogs API --> ${err}` },
      { status: 500 }
    );
  }
}
