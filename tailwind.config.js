const tailwindCapsize = require("@themosaad/tailwindcss-capsize");

module.exports = {
	mode: "jit",
	purge: ["./src/**/*.tsx"],
	darkMode: false,
	theme: {
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [tailwindCapsize],
};
