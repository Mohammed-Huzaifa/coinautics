/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        clash: ["Clash Grotesk", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },      
      colors: {
        brand: {
          primary: "#5757FF",       // Indigo Blue 60
          primaryLight: "#D0CEFF",  // Indigo Blue 40
          black: "#0A0A0A",         // Slate Black
          white: "#F2F3F3",         // Inverse Text
          accent: "#FFC107",        // Accent
        },
        text: {
          default: "#0A0A0A",
          inverse: "#F2F3F3",
          sub: "#C8C8C8",
        },
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          800: "#1A1A1A",
          900: "#0A0A0A",
        },
      },
      boxShadow: {
        card: "0 4px 20px rgba(0, 0, 0, 0.05)",
        button: "0 2px 8px rgba(87, 87, 255, 0.3)",
      },
      spacing: {
        section: "128px", // foundation spacing
      },
    },
  },
  plugins: [],
};
