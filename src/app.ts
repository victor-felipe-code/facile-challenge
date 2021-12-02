import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";

import { errorDefault } from "./middleware";
import { router } from "./routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(router);
app.use(errorDefault);
export { app };
