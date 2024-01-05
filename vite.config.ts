import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      components: "/src/components",
      common: "/src/components/common",
      assets: "/src/assets",
      hooks: "/src/hooks",
      utils: "/src/utils",
      constants: "/src/constants",
    },
  },
  plugins: [react()],
  base: "/vite-ecosolution",
  build: {
    outDir: "build", // Здесь указываем папку "build"
  },
});
