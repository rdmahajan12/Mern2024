const z = require("zod");

const signupSchema = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(3, { message: "min 3 char" })
    .max(30, { message: "max 30 char" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(10, { message: "min 10 char email" })
    .max(50, { message: "max 50 char email" }),

  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "min have 10 digit number" })
    .max(15, { message: "max have 15 digit number" }),

  password: z
    .string({ required_error: "password is required" })
    .min(4, { message: "min 4 char password" })
    .max(8, { message: "max 8 char password" }),
});

module.exports = signupSchema;
