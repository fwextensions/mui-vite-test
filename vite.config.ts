import path from "node:path";
import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	plugins: [react()],
	root: "src",
	publicDir: "../public",
	build: {
		outDir: "../dist"
	},
	resolve: {
		alias: { "/src": path.resolve(process.cwd(), "src") }
	},
});
