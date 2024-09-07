import { defineConfig, presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetAttributify()],
  rules: [
    ["m-100px", { margin: "100px" }],
    ["text-green", { color: "green" }],
    ["text-bold", { "font-weight": "700" }],
  ],
});
