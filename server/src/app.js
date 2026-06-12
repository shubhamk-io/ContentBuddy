import cors from "cors";
import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import waitlistRoutes from "../routes/waitlistRoutes.js";

const app = express();

app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);
app.use(express.json({ limit: "10kb" }));
app.use(morgan("tiny"));

app.get("/api/health", (_req, res) => {
  res.status(200).json({ success: true, message: "API is healthy" });
});

app.use("/api/waitlist", waitlistRoutes);

app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || "Something went wrong"
  });
});

export default app;
