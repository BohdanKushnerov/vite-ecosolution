import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: "/src/components",
      assets: "/src/assets",
      hooks: "/src/hooks",
      utils: "/src/utils",
    },
  },
  plugins: [react()],
  base: "/vite-ecosolution",
  build: {
    outDir: "build", // Здесь указываем папку "build"
  },
});
