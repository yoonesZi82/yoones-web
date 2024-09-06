import path from "path";
import fs from "fs/promises";
import { existsSync } from "fs";
import BlogModel from "@/models/Blog";

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const { imgName } = json;

    const directory = path.join(
      process.cwd(),
      "public/upload/projects",
      imgName
    );

    if (!existsSync(directory)) {
      return Response.json("فایل مورد نظر یافت نشد!", { status: 400 });
    }

    await fs.unlink(directory);

    await BlogModel.updateOne(
      {
        src: imgName,
      },
      { src: "" }
    );

    return Response.json("File deleted!", { status: 200 });
  } catch (error) {
    return Response.json(`Error occurred while deleting file! ${error}`, {
      status: 400,
    });
  }
}
