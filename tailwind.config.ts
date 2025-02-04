import type {Config} from "tailwindcss";

// tailwind.config.js
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            xs: '0.75rem',
            sm: '0.8125rem',
            base: '0.9375rem',
            lg: '1.125rem',
            xl: '1.5rem',
            xxl: '2rem',
            desktop: '4rem',
            tablet: '2.75rem',
            mobile: '2.5rem',
        },
        extend: {
            dropShadow: {
                fi: "20px 20px 60px #bebebe,\n" +
                    "             -20px -20px 60px #ffffff",
                'custom-purple': [
                    '0 4px 6px rgba(99, 95, 199, 0.5)',
                    '0 10px 15px rgba(99, 95, 199, 0.3)'
                ],
            },
            backgroundImage: {
                'gradient-glass': 'linear-gradient(165deg, rgba(0, 0, 0, 0.05), rgba(255, 255, 255, 0.2) 30%, rgba(255, 255, 255, 0.05) 80%, rgba(0, 0, 0, 0.02))',
            },
            colors: {
                shadow: "#E0E0E0",
                primary: '#635FC7',
                primaryLight: '#A8A4FF',
                dark: '#000112',
                darkSecondary: '#20212C',
                neutralDark: '#2B2C37',
                neutral: '#3E3F4E',
                neutralLight: '#828FA3',
                light: '#E4EBFA',
                lightest: '#F4F7FD',
                lightGrey: '#F9FAFB',
                white: '#FFFFFF',
                error: '#EA5555',
                errorLight: '#FF9898',
            },
            spacing: {
                18: '4.5rem',
            },
            fontFamily: {
                sans: ['Plus Jakarta Sans', 'sans-serif'],
            },
            lineHeight: {
                'heading-xl': '110px',
                'body-l': '23px',
                'heading-l': '23px',
                'heading-m': '19px',
                'body-m': '15px',
            },
            letterSpacing: {
                'heading-s': '2.4px',
            },
            boxShadow: {
                DEFAULT: '0px 1px 3px rgba(0, 0, 0, 0.1)',
                'button-hover': '0px 4px 6px rgba(99, 95, 199, 0.3)',
            },
        },
    },
    plugins: [],
} satisfies Config;
