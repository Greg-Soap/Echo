import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import postRoutes from "./routes/posts";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/posts", postRoutes);
const CONNECTION_URL = process.env.MONGO_URL;

const PORT = process.env.PORT || 4000;
mongoose
  .connect(CONNECTION_URL!)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`server is listening on ${PORT}`);
    })
  )
  .catch((error) => console.log(error));
