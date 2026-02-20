import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // Verifique se está 'plugin-react'
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/Sabor-dahora/", // Nome exato do seu repositório
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});