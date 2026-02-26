import http from "http";
import app from "./app";
import { env } from "./config/env";
import { logger } from "./config/logger";
import { closeDb } from "./db";

const port = process.env.PORT ? Number(process.env.PORT) : 4000;

const server = http.createServer(app);

server.listen(port, () => {
  logger.info(`🚀 Server running on http://localhost:${port}`);
});

function shutdown(signal: string) {
  logger.info(`🛑 Received ${signal}, shutting down...`);

  server.close(async (err) => {
    if (err) {
      logger.error("Error while closing server", err);
      process.exit(1);
    }

    try {
      await closeDb();
      logger.info("Database pool closed.");
    } catch (dbErr) {
      logger.error("Error while closing DB pool", dbErr);
    } finally {
      process.exit(0);
    }
  });
}

process.on("SIGINT", () => shutdown("SIGINT"));
process.on("SIGTERM", () => shutdown("SIGTERM"));
