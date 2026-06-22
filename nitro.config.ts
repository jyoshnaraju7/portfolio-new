import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  presets: ["vercel"],
  routeRules: {
    "/**": { cache: false },
  },
});
