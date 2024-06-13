import express, { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import "express-async-errors";
import middlewares from "./middlewares";
import routes from "./routes";
import globalErrorHandler from "./errors";
import AppError from "../utils/app-error";

const app = express();

// middlewares
app.use(middlewares);

// routes
app.use("/api", routes);

// check health
app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "server is running smoothly",
  });
});

// welcome message
app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to your Ticket Booking system server",
  });
});

app.all("*", (req: Request, res: Response, next: NextFunction) => {
  next(
    new AppError(
      `Can't find ${req.originalUrl} on this server.`,
      httpStatus.NOT_FOUND
    )
  );
});

app.use(globalErrorHandler);

export default app;
