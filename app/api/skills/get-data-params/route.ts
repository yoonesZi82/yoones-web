import SkillModel from "@/models/Skill";

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

    const skill = await SkillModel.findOne({ key: params }).lean();
    if (!skill) {
      return Response.json({ message: "Skill not found :((" }, { status: 404 });
    }

    return Response.json(skill, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error --> ${err}` },
      { status: 500 }
    );
  }
}
