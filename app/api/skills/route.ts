import SkillModel from "@/models/Skill";

export async function GET() {
  try {
    const skills = await SkillModel.find({}, "-__v").sort({ _id: -1 }).lean();
    if (!skills) {
      return Response.json(
        { message: "Skills not found :((" },
        { status: 404 }
      );
    }

    return Response.json(skills, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error in Get Skills --> ${err}` },
      { status: 500 }
    );
  }
}
