/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    //Define Media queries
    /*screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },*/

    //Define Custom Fonts
    /*fontFamily: {
            sans: ["Jost", "sans-serif"],
            //or alternatively
            jost: ['Jost','sans-serig'],
            ...
            //and then you can apply it by 'font-just'
      },*/
    extend: {
      //Extend Tailwind Color Pallet
      /*colors: {
        //Generated with Uicolors.app
        "curious-blue": {
          50: "#eff9fc",
          100: "#d6f0f7",
          200: "#b2e1ef",
          300: "#7dcae3",
          400: "#41aacf",
          500: "#2899c3",
          600: "#227298",
          700: "#225e7c",
          800: "#234d67",
          900: "#224257",
        },
      },*/
      //Create Custom Animations
      animation: {
        "spin-slow": "spin 3s linear infinite",
        //You can call the keyframes
        bounce: "bounce 3s ease-in-out infinite",
      },

      //Create custom Key-frames
      keyframes: {
        bounce: {
          //You can use css .style in js
          "0%, 100%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(.9)",
          },
        },
      },
    },
  },
  plugins: [],
};
