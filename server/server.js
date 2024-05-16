require("dotenv").config();
const express = require("express");
const app = express();
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");

app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use(errorMiddleware);

connectDB().then(() => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`app running on port: ${PORT}`);
  });
});
