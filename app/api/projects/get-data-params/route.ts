import ProjectModel from "@/models/Project";

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

    const project = await ProjectModel.findOne({ key: params }).lean();
    if (!project) {
      return Response.json(
        { message: "Project not found :((" },
        { status: 404 }
      );
    }

    return Response.json(project, { status: 200 });
  } catch (err) {
    return Response.json(
      { message: `Unknown Error --> ${err}` },
      { status: 500 }
    );
  }
}
