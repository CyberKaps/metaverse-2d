import express from "express";
import { router } from "./routes/v1/index.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/v1", router);


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});