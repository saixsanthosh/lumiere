import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        espresso: "#1C120A",
        roasted: "#2E1D11",
        mocha: "#4A3120",
        caramel: "#C9A24B",
        "gold-bright": "#E8C97A",
        cream: "#F5EFE3",
        "warm-white": "#FAF6EE",
        latte: "#D9C7A8",
        terracotta: "#B5562E",
        sage: "#7C8A6A",
        "text-dark": "#F5EFE3",
        "text-muted-dark": "#C4B49A",
        "text-light": "#2E1D11",
        "text-muted-light": "#7A6B58",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        heading: ["Playfair Display", "serif"],
        ui: ["Cormorant", "serif"],
        body: ["Jost", "sans-serif"],
        script: ["Dancing Script", "cursive"],
      },
      borderRadius: {
        sm: "4px",
        md: "10px",
        lg: "18px",
        xl: "28px",
        pill: "100px",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "40px",
        "2xl": "64px",
        "3xl": "96px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(201,162,75,0.3)",
        "glow-lg": "0 0 40px rgba(201,162,75,0.4)",
        warm: "0 4px 30px rgba(28,18,10,0.3)",
        card: "0 8px 32px rgba(28,18,10,0.2)",
      },
      backgroundImage: {
        "warm-gradient":
          "linear-gradient(135deg, #1C120A 0%, #2E1D11 50%, #4A3120 100%)",
        "gold-gradient":
          "linear-gradient(135deg, #C9A24B 0%, #E8C97A 100%)",
        "hero-overlay":
          "linear-gradient(to bottom, rgba(28,18,10,0.65), rgba(28,18,10,0.45), rgba(28,18,10,0.7))",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse_glow: {
          "0%, 100%": { boxShadow: "0 0 8px rgba(201,162,75,0.4)" },
          "50%": { boxShadow: "0 0 20px rgba(201,162,75,0.7)" },
        },
        bounce_slow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        shimmer: "shimmer 2s infinite linear",
        float: "float 3s ease-in-out infinite",
        pulse_glow: "pulse_glow 2s ease-in-out infinite",
        bounce_slow: "bounce_slow 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
