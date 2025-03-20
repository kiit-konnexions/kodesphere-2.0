module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Supports your existing dark mode implementation
    theme: {
        extend: {
            colors: {
                // Your theme colors can be defined here to match CSS variables
                zinc: {
                    700: '#3f3f46',
                    800: '#27272a',
                    900: '#0a0a0a',
                },
                gray: {
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                },
                cyan: {
                    500: '#06b6d4',
                },
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)', 'var(--font-jetbrains-mono)'],
                'jetbrains-mono': ['var(--font-jetbrains-mono)'],
            },
        },
    },
    plugins: [],
};