import { z } from "zod";

const ForgetPassSchema = z.object({
  email: z.string().email("Email is not valid!"),
  password: z
    .string()
    .min(8, { message: "The password must not be less than 8 characters" })
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
      "The entered password format is not correct"
    ),
  newPassword: z
    .string()
    .min(8, { message: "The password must not be less than 8 characters" })
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
      "The entered password format is not correct"
    ),
});

export default ForgetPassSchema;
