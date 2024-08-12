import { z } from "zod";

const ContactSchema = z.object({
  text: z
    .string()
    .min(1, { message: "متن پیام را وارد کنید" })
    .max(300, { message: "متن پیام نمیتواند بیشتر از 300 کاراکتر باشد" }),
  name: z.string().min(1, { message: "نام را وارد کنید" }),
  email: z.string().email("ایمیل نادرست است"),
  phone: z
    .string()
    .min(11, { message: "شماره تلفن حداقل باید 11 کاراکتر باشد" })
    .max(11, { message: "شماره تلفن حداکثر باید 11 کاراکتر باشد" })
    .regex(/^(\+98|0)?9\d{9}$/g, "فرمت شماره نادرست است"),
  checkbox: z.boolean(),
});

export default ContactSchema;
