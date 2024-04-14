import z from "zod";

export const signUpSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  password: z.string(),
  phoneNo: z.string(),
  txPin: z.string().length(4, "transaction pin must be four digits")
});
