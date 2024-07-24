/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainColor: {
                    DEFAULT: "#1e1e1e",
                },
            },
        },
    },
    plugins: [],
};
