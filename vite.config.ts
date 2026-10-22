import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

// Serve /resume as resume.html locally (Vercel does the same via cleanUrls)
const cleanResume = (): Plugin => {
  const rewrite = (req: { url?: string }, _res: unknown, next: () => void) => {
    if (req.url === "/resume" || req.url === "/resume/") req.url = "/resume.html";
    next();
  };
  return {
    name: "clean-resume-url",
    configureServer: (s) => void s.middlewares.use(rewrite),
    configurePreviewServer: (s) => void s.middlewares.use(rewrite),
  };
};

export default defineConfig({
  plugins: [react(), tailwindcss(), cleanResume()],
  build: {
    rollupOptions: {
      input: { main: resolve(__dirname, "index.html"), resume: resolve(__dirname, "resume.html") },
    },
  },
});
