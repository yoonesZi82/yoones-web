import BlogModel from "@/models/Blog";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id } = body;
    if (!id) {
      return Response.json({ message: "Id is not valid" }, { status: 403 });
    }
    if (typeof id !== "string") {
      return Response.json({ message: "Id is not string" }, { status: 403 });
    }
    const blog = await BlogModel.findOne({ _id: id }).lean();

    if (!blog) {
      return Response.json({ message: "Blog not found" }, { status: 404 });
    }

    return Response.json(blog, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown error in get blog API --> ${err}` },
      { status: 500 }
    );
  }
}
