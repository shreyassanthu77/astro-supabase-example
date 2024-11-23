import * as astro from "prettier-plugin-astro";
import * as tailwindcss from "prettier-plugin-tailwindcss";

/** @type {import("prettier").Config} */
export default {
  plugins: [astro, tailwindcss],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
