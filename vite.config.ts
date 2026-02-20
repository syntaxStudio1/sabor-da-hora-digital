import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  // O ponto antes da barra obriga o navegador a procurar os arquivos 
  // na pasta atual, não importa qual seja o nome do repositório.
  base: "./", 
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Garante que os arquivos gerados tenham nomes simples
    outDir: "dist",
  }
});