/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F5F5',
        'primary-color': '#FF0000',
        "light-grey": "#b0b0b0",
        white: "#fff",
        black: "#000",
        "secondary-text": "#858585",
        cornflowerblue: "#6972c3",
        icon: "#999",
        dimgray: "#666",
        lightcoral: "#ee8484",
        khaki: "#f6dc7d",
        darkseagreen: "#98d89e",
        "light-green": "#9bdd7c",
        "light-red": "#e9a0a0",
        "field-color-darker": "#eaeaea",
        lavender: "#dee0ef",
        mistyrose: "#efdada",
        honeydew: "#ddefe0",
        oldlace: "#f4ecdd",
        link: "#346bd4",
        black: "#000",
        "secondary-text": "#858585",
        white: "#fff",
        link: "#346bd4",
        "field-color-darker": "#eaeaea",
        background: "#f5f5f5",
        "light-grey": "#b0b0b0",
        cornflowerblue: "#6972c3",
        icon: "#999",
        dimgray: "#666",
        lightcoral: "#ee8484",
        khaki: "#f6dc7d",
        darkseagreen: "#98d89e",
        "light-green": "#9bdd7c",
        "light-red": "#e9a0a0",
        lavender: "#dee0ef",
        mistyrose: "#efdada",
        honeydew: "#ddefe0",
        oldlace: "#f4ecdd",
        
      },
      fontFamily: {
        lato: "Lato",
        montserrat: "Montserrat",
        "open-sans": "'Open Sans'",
        
      },
      borderRadius: {
        "3xs": "10px",
        xl: "20px",
        
      },
    },
    fontSize: {
      sm: "14px",
      "5xl": "24px",
      xs: "12px",
      lg: "18px",
      "17xl": "36px",
      base: "16px",
    },
  },
  corePlugins: {
    preflight: false,
  },
}