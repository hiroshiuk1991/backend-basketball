import * as express from "express";

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello world, I'm running here");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
