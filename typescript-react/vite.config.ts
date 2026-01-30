import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 2. @ 기호를 src 폴더 절대 경로로 연결
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
