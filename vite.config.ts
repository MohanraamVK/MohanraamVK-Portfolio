import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base "./" keeps asset paths relative, so the same build works on
// GitHub Pages (/mohanraamvk-portfolio/), Netlify or a custom domain.
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
});
