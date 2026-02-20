import { defineConfig } from "vite";
import react from "@vitejs/plugin-react"; // ou "@vitejs/plugin-react" dependendo da sua versão
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // ADICIONADO: Define a base para o GitHub Pages
  base: "/sabor-da-hora-digital/", 
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));