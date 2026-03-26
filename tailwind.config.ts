import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F2F2EE",
        surface: "#FFFFFF",
        text: "#2D2D2A",
        textMuted: "#5F615D",
        line: "#E2E2DC",
        brandGreen900: "#135A4B",
        brandGreen800: "#165F4F",
        brandGreen700: "#1D6A58",
        brandGreen400: "#4D9786",
        accentOrange: "#CC5A2D",
        accentOrangeHover: "#B94F27",
        iconGold: "#D7AE56",
        quoteHighlight: "#E6E0D1",
      },
      maxWidth: {
        layout: "1440px",
        wide: "1840px",
        content: "980px",
        reading: "720px",
      },
      fontFamily: {
        sans: ["'Source Sans 3'", "'Segoe UI'", "Arial", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      spacing: {
        gutter: "32px",
        "gutter-tablet": "24px",
        "gutter-mobile": "16px",
      },
      boxShadow: {
        quiet: "0 8px 24px rgba(19, 90, 75, 0.08)",
      },
      borderRadius: {
        editorial: "4px",
      },
      keyframes: {
        dropdownIn: {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        dropdownIn: "dropdownIn 150ms ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
