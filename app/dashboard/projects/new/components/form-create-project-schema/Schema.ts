import { z } from "zod";

const ProjectSchema = z.object({
  title: z.string().min(1, { message: "Fill in blog title" }),
  tag: z.string().min(1, { message: "Fill in blog tag" }),
  image: z
    .string({ message: "Fill in blog photo" })
    .min(1, "Fill in blog photo"),
  link: z.string().min(1, { message: "Fill in blog link" }),
});

export default ProjectSchema;
