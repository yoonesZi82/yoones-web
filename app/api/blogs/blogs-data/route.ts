import BlogModel from "@/models/Blog";

export async function GET() {
  try {
    const blogs = await BlogModel.find({}, "-__v -type")
      .sort({ _id: -1 })
      .lean();
    if (!blogs) {
      return Response.json({ message: "Blogs not found :((" }, { status: 404 });
    }

    return Response.json(blogs, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error in Get Blogs --> ${err}` },
      { status: 500 }
    );
  }
}
