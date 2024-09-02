// import { auth } from "@/auth/auth";
import path from "path";
import fs from "fs/promises";
import { existsSync, mkdirSync } from "fs";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    // For uploading file using antd 'Upload' component
    const fileAnt = formData.get("file") as File | null;
    if (fileAnt) {
      if (!fileAnt.type.startsWith("image/")) {
        return Response.json("فایل بارگذاری شده از نوع عکس نیست.", {
          status: 400,
        });
      }

      const fileSize = fileAnt.size / (1024 * 1024);
      if (fileSize > 8) {
        return Response.json("عکس نباید بیش از 8 مگابایت باشد.", {
          status: 400,
        });
      }

      const arrBuffer = await fileAnt.arrayBuffer();
      const buffer = Buffer.from(arrBuffer);

      const filename = Date.now() + "_" + fileAnt.name;
      const uploadDir = path.join(process.cwd(), "public/upload");

      if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir);
      }
      await fs.writeFile(uploadDir + `\\${filename}`, buffer);

      return Response.json({ imgName: filename }, { status: 200 });
    }

    // For uploading file in CKEditor 5
    const fileCKEditor = formData.get("upload") as File | null;
    if (fileCKEditor) {
      if (!fileCKEditor.type.startsWith("image/")) {
        return Response.json(
          {
            error: {
              message: "فایل بارگذاری شده از نوع عکس نیست.",
            },
          },
          { status: 400 }
        );
      }

      const fileSize = fileCKEditor.size / (1024 * 1024);
      if (fileSize > 8) {
        return Response.json(
          {
            error: {
              message: "عکس نباید بیش از 8 مگابایت باشد.",
            },
          },
          { status: 400 }
        );
      }

      const arrBuffer = await fileCKEditor.arrayBuffer();
      const buffer = Buffer.from(arrBuffer);

      const filename = Date.now() + "_" + fileCKEditor.name;
      const uploadDir = path.join(process.cwd(), "public/upload");

      if (!existsSync(uploadDir)) {
        mkdirSync(uploadDir);
      }
      await fs.writeFile(uploadDir + `\\${filename}`, buffer);

      return Response.json({ url: `/upload/${filename}` }, { status: 200 });
    }

    return Response.json("File not found!", { status: 400 });
  } catch (error) {
    return Response.json(`Error occured while uploading file! ${error}`, {
      status: 400,
    });
  }
}
