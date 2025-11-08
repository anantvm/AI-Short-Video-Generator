import { defineConfig } from "drizzle-kit";
export default defineConfig({
//   out: "./drizzle",
  dialect: "postgresql",
  schema: "./configs/schema.js",
//   driver: "pglite",
  dbCredentials: {
    // Sometimes may not work without giving url directly
    url: process.env.NEXT_PUBLIC_DRIZZLE_DATABASE_URL,
  },
});