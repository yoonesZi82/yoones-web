import { z } from "zod";

const ContactSchema = z.object({
  text: z
    .string()
    .min(1, { message: "Enter message text" })
    .max(300, {
      message: "The text of the message cannot be more than 300 characters",
    }),
  name: z.string().min(1, { message: "Fill in your name" }),
  email: z.string().email("Email is not valid!"),
  phone: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters" })
    .max(11, { message: "Phone number must be 11 characters at most" })
    .regex(/^(\+98|0)?9\d{9}$/g, "Phone number is not valid!"),
  checkbox: z.boolean(),
});

export default ContactSchema;
