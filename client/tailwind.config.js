/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        canvas: {
          50: "#F8FBFF",
          100: "#EFF6FF"
        },
        brand: {
          500: "#3B82F6",
          600: "#2563EB",
          300: "#60A5FA"
        },
        accent: {
          teal: "#14B8A6",
          mint: "#CCFBF1",
          ink: "#0B1220",
          violet: "#6366F1"
        }
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 18px 54px rgba(37, 99, 235, 0.2)",
        soft: "0 24px 80px rgba(15, 23, 42, 0.1)",
        crisp: "0 10px 30px rgba(15, 23, 42, 0.08)"
      }
    }
  },
  plugins: []
};
