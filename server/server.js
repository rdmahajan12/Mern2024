require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./router/auth-router");
const contactRouter = require("./router/contact-router");
const connectDB = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const serviceRouter = require("./router/service-router");
const adminRouter = require("./router/admin-router");

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT, DELETE, PATCH",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRouter);
app.use("/api/admin", adminRouter);
app.use(errorMiddleware);

connectDB().then(() => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`app running on port: ${PORT}`);
  });
});
