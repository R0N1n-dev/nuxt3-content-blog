//import { defineConfig } from "windicss/helpers";

export default {
  attributify: false,
  plugins: [require("daisyui")],
  extract: {
    include: ["**/*.{vue,html,jsx,tsx}"],
    exclude: ["node_modules", ".git"],
  },
};
