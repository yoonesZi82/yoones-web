import { z } from "zod";

const SkillSchema = z.object({
  tag: z.string().min(1, { message: "Fill in blog tag" }),
  image: z
    .string({ message: "Fill in blog photo" })
    .min(1, "Fill in blog photo"),
  rate: z
    .number()
    .min(0, { message: "Fill in blog rate" })
    .max(5, { message: "Fill in blog rate" }),
});

export default SkillSchema;
