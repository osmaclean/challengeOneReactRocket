import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'gray-100': '#f2f2f2',
        'gray-200': '#d9d9d9',
        'gray-300': '#808080',
        'gray-400': '#333333',
        'gray-500': '#262626',
        'gray-600': '#1a1a1a',
        'gray-700': '#0d0d0d',
        'danger-300': '#e25858',
        'blue-200': '#4ea8de',
        'blue-300': '#1e6f9f',
        'purple-200': '#8284fa',
        'purple-300': '#5e60ce',
      },
    },
  },
  plugins: [],
}
export default config
