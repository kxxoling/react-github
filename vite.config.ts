import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgr from 'vite-plugin-svgr';
import tsConfigPaths from "vite-tsconfig-paths";

import * as packageJson from "./package.json";

export default defineConfig(() => ({
  plugins: [
    svgr(),
    react(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  build: {
    lib: {
      entry: resolve("src", "index.ts"),
      name: "react-github",
      formats: ["es", "cjs"],
      fileName: (format) =>
        `react-github.${
          format === "cjs" ? "cjs" : "es.js"
        }`,
    },
    optimizeDeps: {
      exclude: Object.keys(packageJson.peerDependencies),
    },
    esbuild: {
      minify: true,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        }
      }
    },
  },
}));
