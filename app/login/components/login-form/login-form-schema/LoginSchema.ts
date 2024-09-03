import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Email format is incorrect"),
  password: z
    .string()
    .min(8, { message: "The password must not be less than 8 characters" })
    .regex(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g,
      "The entered password format is not correct"
    ),
});

export default LoginSchema;
