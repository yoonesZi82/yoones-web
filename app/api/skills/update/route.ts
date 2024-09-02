import SkillModel from "@/models/Skill";

export async function PUT(req: Request) {
  try {
    const json = await req.json();
    const { tag, image, rate, key } = json;

    if (!tag || !image || !rate || !key) {
      return Response.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    if (tag) {
      const data = await SkillModel.findOne({ tag });
      if (data) {
        return Response.json({ message: "Tag in not new" }, { status: 402 });
      }
    }

    if (image) {
      const data = await SkillModel.findOne({ src: image });
      if (data) {
        return Response.json({ message: "Image in not new" }, { status: 403 });
      }
    }

    await SkillModel.findOneAndUpdate(
      { key },
      { tag, src: image, rate, date: new Date().getTime() }
    );

    return Response.json(
      { message: "Skill updated successfully" },
      { status: 200 }
    );
  } catch (err) {
    return Response.json(
      { message: `Unable to update skill an error --> ${err}` },
      { status: 500 }
    );
  }
}
