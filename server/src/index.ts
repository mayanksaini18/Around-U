import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import searchRoutes from "./routes/search.route.js";
import workerRoutes from "./routes/workerRoute.js";
import reviewRoutes from "./routes/review.route.js";
import { errorHandler, notFound } from "./middleware/error.js";

dotenv.config();

const app = express();

const allowedOrigins = (process.env.CORS_ORIGINS ?? "http://localhost:3000")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

app.use(helmet());
app.use(
  cors({
    origin: (origin, cb) => {
      if (!origin || allowedOrigins.includes(origin) || allowedOrigins.includes("*")) {
        return cb(null, true);
      }
      cb(new Error(`Origin ${origin} not allowed by CORS`));
    },
  })
);
app.use(express.json({ limit: "100kb" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

app.get("/", (_req, res) => {
  res.json({ status: "ok", service: "around-u-api" });
});

app.use("/api/search", searchRoutes);
app.use("/api/worker", workerRoutes);
app.use("/api/review", reviewRoutes);

app.use(notFound);
app.use(errorHandler);

const port = Number(process.env.PORT) || 4999;

async function start() {
  await connectDB();
  app.listen(port, () => {
    console.log(`server is running on port ${port}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});
