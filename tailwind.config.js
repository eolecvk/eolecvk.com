/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'accent': '#00FF9C',
        'dark': '#171219',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        '4xl': '8rem',     // 128px
        'section-mobile': '3rem',    // 48px
        'section-desktop': '5rem',   // 80px
      },
      maxWidth: {
        'content-narrow': '56rem',   // 896px - for hero content
        'content-default': '64rem',  // 1024px - for portfolio grid
        'content-wide': '72rem',     // 1152px - for sections
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.35',
      },
    },
  },
  plugins: [],
}
