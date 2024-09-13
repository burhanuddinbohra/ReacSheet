import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This will bind Vite to all network interfaces
    port: 3000, // You can change the port if needed
  },
});
