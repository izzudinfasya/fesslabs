/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--color-background)",
                foreground: "var(--color-foreground)",
                muted: "var(--color-muted)",
                "muted-foreground": "var(--color-muted-foreground)",
                primary: "var(--color-primary)",
                border: "var(--color-border)",
            },
        },
    },
    plugins: [],
};