import ProjectModel from "@/models/Project";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image, title, tag, link } = body;

    if (!image || !title || !tag || !link) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    if (
      typeof image !== "string" ||
      typeof title !== "string" ||
      typeof tag !== "string" ||
      typeof link !== "string"
    ) {
      return Response.json({ message: "Invalid data type" }, { status: 400 });
    }

    await ProjectModel.create({
      src: image,
      title: `${title.charAt(0).toUpperCase()}${title.slice(1)}`,
      tag: `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`,
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
