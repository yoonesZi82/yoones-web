import SkillModel from "@/models/Skill";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { tag, rate, image } = body;

    if (!tag || !rate || !image) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }
    if (
      typeof tag !== "string" ||
      typeof image !== "string" ||
      typeof rate !== "number"
    ) {
      return Response.json({ message: "Invalid data type" }, { status: 400 });
    }

    await SkillModel.create({
      tag: `${tag.charAt(0).toUpperCase()}${tag.slice(1)}`,
      src: image,
      rate,
    });

    return Response.json(
      { message: "Skill created successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unknown error for create skill --> ${err} ` },
      { status: 500 }
    );
  }
}
