import express, { Request, Response } from "express";
import dotenv from "dotenv";

import homeRoute from "./routes/home";
import aboutRoute from "./routes/about";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use("/", homeRoute);
app.use("/about", aboutRoute);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
