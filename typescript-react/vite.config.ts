import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // @ 기호를 src 폴더 절대 경로로 연결
      "@": path.resolve(__dirname, "./src"),
      // @를 src 폴더 경로로 매핑하기
      find: "@",
      replacement: path.resolve(__dirname, "src"),
    },
  },
});
