/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'var(--background)',
  			foreground: 'var(--foreground)'
  		},
  		keyframes: {
  			blink: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '0'
  				}
  			}
  		},
  		animation: {
  			blink: 'blink 1s steps(1, start) infinite'
  		},
  		fontFamily: {
  			barrio: ['Barrio', 'system-ui'],
  			balsamiq: ["Balsamiq Sans", 'sans-serif'],
  			abel: ["Abel", 'sans-serif'],
  			inter: ['Inter', 'sans-serif']
  		},
  		fontWeight: {
  			regular: '400'
  		},
  		fontStyle: {
  			normal: 'normal'
  		},
  		backgroundImage: {
  			'sprinkle-shade': 'url("/sprinkle.png")',
  			porcelain: 'url("/category-img1.jpg")',
  			clock: 'url("/category-img2.jpg")',
  			jewelery: 'url("/category-img3.jpg")',
  			manuscript: 'url("/category-img4.jpg")',
  			ceramic: 'url("/category-img5.jpg")'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
