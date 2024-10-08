import BlogModel from "@/models/Blog";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { image, title, tag, description } = body;

    if (!image || !title || !tag || !description) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    if (
      typeof image !== "string" ||
      typeof title !== "string" ||
      typeof tag !== "string" ||
      typeof description !== "string"
    ) {
      return Response.json({ message: "Invalid data type" }, { status: 400 });
    }

    await BlogModel.create({
      src: image,
      title: `${title.charAt(0).toUpperCase()}${title.slice(1)}`,
      tag: `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`,
      description: `${description.charAt(0).toUpperCase()}${description.slice(
        1
      )}`,
    });

    return Response.json(
      { message: "Blog created successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unknown error for create blog --> ${err} ` },
      { status: 500 }
    );
  }
}
