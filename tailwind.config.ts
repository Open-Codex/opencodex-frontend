import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: 'class',
    content: [
        './app/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                background: '#0d1117',
                foreground: '#c9d1d9',
                accent: '#a855f7',
            },
        },
    },
    plugins: [],
};

export default config;