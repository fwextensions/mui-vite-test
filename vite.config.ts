import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// we want the index.html file to be in /src, but vite irritatingly only looks
// for it in the project root, so set the root to src.  we then have to redefine
// other paths in relation to src.
export default defineConfig({
	plugins: [react()],
	root: "src",
	publicDir: "../public",
	build: {
		outDir: "../dist"
	},
	resolve: {
		alias: {
			"/src": path.resolve(process.cwd(), "src"),
			"@": path.resolve(process.cwd(), "src")
		}
	},
});
