import BlogModel from "@/models/Blog";

export async function POST(req: Request) {
  try {
    const { params } = await req.json();
    if (!params) {
      return Response.json({ message: "Params not found" }, { status: 403 });
    }
    if (typeof params !== "string") {
      return Response.json(
        { message: "Params is not string" },
        { status: 403 }
      );
    }

    const blog = await BlogModel.findOne({ key: params }).lean();
    if (!blog) {
      return Response.json({ message: "Blog not found :((" }, { status: 404 });
    }

    return Response.json(blog, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error --> ${err}` },
      { status: 500 }
    );
  }
}
