const path = require("path");

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
		path.resolve("./.storybook/addon-gatsby.js"),
	],
};
