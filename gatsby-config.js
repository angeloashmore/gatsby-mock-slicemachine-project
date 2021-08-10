require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "Mock Slice Machine Project",
	},
	plugins: [
		"gatsby-plugin-react-helmet-async",
		"gatsby-plugin-loadable-components-ssr",
		{
			resolve: "gatsby-source-prismic",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.PRISMIC_ACCESS_TOKEN,
				// TODO: Automatically load these files.
				customTypeModels: [require("./src/customtypes/page/index.json")],
				sharedSliceModels: [
					require("./src/slices/CallToAction/model.json"),
					require("./src/slices/Hero/model.json"),
				],
				linkResolver: require("./src/linkResolver").linkResolver,
			},
		},
		{
			resolve: "gatsby-plugin-prismic-previews",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.PRISMIC_ACCESS_TOKEN,
			},
		},
	],
};
