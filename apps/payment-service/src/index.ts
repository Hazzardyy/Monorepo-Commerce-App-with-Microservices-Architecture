import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

const start = async () => {
  try {
    serve(
      {
        fetch: app.fetch,
        port: 3000,
      },
      (info) => {
        console.log("Payment service is running on port 8002");
      }
    );
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
