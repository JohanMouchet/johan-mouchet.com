import { resolve } from "path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        api: "modern-compiler",
        includePaths: [
          resolve(__dirname, "../src"),
          resolve(__dirname, "../node_modules"),
        ],
      },
    },
  },
});
