require("dotenv").config();

module.exports = {
	siteMetadata: {
		title: "Ableton",
	},
	plugins: [
		"gatsby-plugin-react-helmet-async",
		"gatsby-plugin-postcss",
		{
			resolve: "gatsby-source-prismic",
			options: {
				repositoryName: process.env.GATSBY_PRISMIC_REPOSITORY_NAME,
				accessToken: process.env.PRISMIC_ACCESS_TOKEN,
				customTypeModels: [require("./customtypes/page/index.json")],
				sharedSliceModels: [require("./src/slices/CallToAction/model.json")],
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
