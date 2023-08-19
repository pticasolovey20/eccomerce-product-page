/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		screens: {
			xs: "375px",
			sm: "576px",
			md: "768px",
			lg: "880px",
			xl: "1200px",
			xxl: "1440px",
		},

		extend: {
			colors: {
				primary: {
					orange: "hsl(26, 100%, 55%)",
					"pale-orange": "hsl(25, 100%, 94%)",
				},

				neutral: {
					"very-dark-blue": "hsl(220, 13%, 13%)",
					"dark-grayish-blue": "hsl(219, 9%, 45%)",
					"grayish-blue": "hsl(220, 14%, 75%)",
					"light-grayish-blue": "hsl(223, 64%, 98%)",
				},
			},
		},
	},
	plugins: [],
};
