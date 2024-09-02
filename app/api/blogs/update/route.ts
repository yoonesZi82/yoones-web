import BlogModel from "@/models/Blog";

export async function PUT(req: Request) {
  try {
    const json = await req.json();
    const { title, tag, image, description, key } = json;

    if (!title || !tag || !image || !description) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (title) {
      const data = await BlogModel.findOne({ title });
      if (data) {
        return Response.json({ message: "Title in not new" }, { status: 401 });
      }
    }
    if (tag) {
      const data = await BlogModel.findOne({ tag });
      if (data) {
        return Response.json({ message: "Tag in not new" }, { status: 402 });
      }
    }

    if (description) {
      const data = await BlogModel.findOne({ description });
      if (data) {
        return Response.json(
          { message: "Description in not new" },
          { status: 405 }
        );
      }
    }

    await BlogModel.findOneAndUpdate(
      { key },
      { title, tag, src: image, description, date: new Date().getTime() }
    );

    return Response.json(
      { message: "Blog updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unable to update blog an error --> ${err}` },
      { status: 500 }
    );
  }
}
