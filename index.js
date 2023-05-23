import express, { Request, Response } from "express";
import router from "./utils/router";

const app = express();
const port = process.env.PORT || 8080;

app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
