import SkillModel from "@/models/Skill";

export async function GET() {
  try {
    const skills = await SkillModel.find({}, "-__v -type")
      .sort({ _id: -1 })
      .lean();
    if (!skills) {
      return Response.json({ message: "Skill not found :((" }, { status: 404 });
    }

    return Response.json(skills, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error in Get Skill --> ${err}` },
      { status: 500 }
    );
  }
}
