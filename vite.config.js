/// <reference types="vite-plugin-svgr/client" />
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";
import svgr from "vite-plugin-svgr";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx}"',
        dev: {
          logLevel: ["error"]
        }
      }
    }),
    svgr()
  ],
  envPrefix: ["VITE_", "REACT_APP_"],
  server: {
    host: true,
    port: 3000,
    open: true
  }
});
