import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { faker } from "@faker-js/faker";

const app = new Hono();

app
  .get("/", (c) => {
    return c.json({
      hello: "Hello Hono 🔥",
    });
  })
  .get("/random-song", (c) => {
    return c.json({
      song: faker.music.songName(),
    });
  })
  .get("/list-of-songs", (c) => {
    const songs = Array.from({ length: 10 }, () => faker.music.songName());
    return c.json({
      songs,
    });
  });

const port = 3000;
console.log(`Server is running on port ${port}`);

serve({
  fetch: app.fetch,
  port,
});
