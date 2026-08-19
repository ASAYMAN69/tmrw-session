/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Silkscreen"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Space Grotesk"', '"JetBrains Mono"', 'sans-serif'],
      },
      colors: {
        mc: {
          void: '#090a10',
          obsidian: '#121420',
          dark: '#181b2c',
          stone: '#24283b',
          border: '#383e58',
          diamond: '#55FFFF',
          blue: '#0088FF',
          darkblue: '#0044CC',
          emerald: '#55FF55',
          neon: '#00FF66',
          redstone: '#FF5555',
          gold: '#FFAA00',
        }
      },
      boxShadow: {
        'pixel': '3px 3px 0px #000000',
        'pixel-sm': '2px 2px 0px #000000',
        'pixel-lg': '4px 4px 0px #000000',
        'glow-diamond': '0 0 16px rgba(85, 255, 255, 0.3)',
        'glow-neon': '0 0 20px rgba(0, 255, 102, 0.35)',
        'glow-blue': '0 0 20px rgba(0, 136, 255, 0.3)',
      }
    },
  },
  plugins: [],
}
