import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
    base: './', // 이 줄을 추가하여 기본 경로를 상대 경로로 설정
    plugins: [react()],
});
