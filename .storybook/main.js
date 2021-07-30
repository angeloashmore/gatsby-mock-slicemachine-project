const path = require("path");

// This line is required for Storybook but will not be used for Gatsby.
// It can be left commented out.
// const { getStoriesPaths } = require('slice-machine-ui/helpers/storybook')

module.exports = {
	core: {
		builder: "webpack5",
	},
	stories: [
		"../src/**/*.stories.mdx",
		"../src/**/*.stories.@(js|jsx|ts|tsx)",
		"../.slicemachine/**/*.stories.js",
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		{
			name: "@storybook/addon-postcss",
			options: {
				postcssLoaderOptions: {
					implementation: require("postcss"),
				},
			},
		},
		"storybook-addon-gatsby",
	],
};
