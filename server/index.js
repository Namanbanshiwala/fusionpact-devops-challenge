import express from "express";
import helmet from "helmet";
import cors from "cors";
import bodyParser from "body-parser";
import applicantsRouter from "./routes/applicants.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(helmet());
app.use(cors());
app.use(bodyParser.json());

app.use("/api/applicants", applicantsRouter);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
