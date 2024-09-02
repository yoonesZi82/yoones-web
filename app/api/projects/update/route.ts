import ProjectModel from "@/models/Project";

export async function PUT(req: Request) {
  try {
    const json = await req.json();
    const { title, tag, image, link, key } = json;

    if (!title || !tag || !image || !link) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (title) {
      const data = await ProjectModel.findOne({ title });
      if (data) {
        return Response.json({ message: "Title in not new" }, { status: 401 });
      }
    }
    if (tag) {
      const data = await ProjectModel.findOne({ tag });
      if (data) {
        return Response.json({ message: "Tag in not new" }, { status: 402 });
      }
    }

    await ProjectModel.findOneAndUpdate(
      { key },
      { title, tag, src: image, link, date: new Date().getTime() }
    );

    return Response.json(
      { message: "Project updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unable to update project an error --> ${err}` },
      { status: 500 }
    );
  }
}
