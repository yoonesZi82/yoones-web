import ProjectModel from "@/models/Project";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { src, title, tag, link } = body;

    if (!src || !title || !tag || !link) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    if (
      typeof src !== "string" ||
      typeof title !== "string" ||
      typeof tag !== "string" ||
      typeof link !== "string"
    ) {
      return Response.json({ message: "Invalid data type" }, { status: 400 });
    }

    await ProjectModel.create({
      src,
      title,
      tag,
      link,
    });

    return Response.json(
      { message: "Project created successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unknown error for create project --> ${err} ` },
      { status: 500 }
    );
  }
}
