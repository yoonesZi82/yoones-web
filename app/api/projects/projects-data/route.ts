import ProjectModel from "@/models/Project";

export async function GET() {
  try {
    const projects = await ProjectModel.find({}, "-__v -type")
      .sort({ _id: -1 })
      .lean();
    if (!projects) {
      return Response.json(
        { message: "Project not found :((" },
        { status: 404 }
      );
    }

    return Response.json(projects, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error in Get Project --> ${err}` },
      { status: 500 }
    );
  }
}
