import type { Config } from "tailwindcss";

const config = {
	theme: {
		extend: {
			colors: {
				brand: {
					DEFAULT: "#5856de",
					50: "#f4f4ff",
					100: "#e9e9ff",
					200: "#d4d4ff",
					300: "#b5b4ff",
					400: "#8b89ff",
					500: "#6966f2",
					600: "#5856de",
					700: "#4947c5",
					800: "#3c3ba0",
					900: "#34347f",
				},
				ink: "#202024",
				surface: {
					DEFAULT: "#ffffff",
					muted: "#f4f6fc",
				},
				copy: {
					muted: "#414149",
				},
			},
			fontFamily: {
				sans: ["var(--font-geist-sans)", "sans-serif"],
				display: ["var(--font-geist-sans)", "sans-serif"],
				body: ["var(--font-geist-sans)", "sans-serif"],
				mono: ["var(--font-google-sans-code)", "monospace"],
			},
			fontSize: {
				display: ["3.75rem", { lineHeight: "1.05" }],
				"heading-1": ["3rem", { lineHeight: "1.1" }],
				"heading-2": ["2.25rem", { lineHeight: "1.2" }],
				"heading-3": ["1.5rem", { lineHeight: "1.3" }],
				"body-lg": ["1.125rem", { lineHeight: "1.6" }],
				body: ["1rem", { lineHeight: "1.65" }],
				caption: ["0.875rem", { lineHeight: "1.5" }],
				label: ["0.75rem", { lineHeight: "1.4" }],
			},
			fontWeight: {
				book: "400",
				medium: "500",
				semibold: "600",
				bold: "700",
			},
		},
	},
} satisfies Config;

export default config;
