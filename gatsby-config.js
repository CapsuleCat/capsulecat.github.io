const siteMetadata = {
	title: 'Capsule Cat',
	description: 'Game development studio that is aiming for the moon',
	siteUrl: 'https://capsulecat.com',
	social: {
		twitter: 'thecapsulecat',
	},

	image: `/default-site-image.jpg`,
	siteLanguage: `en-GB`,
	siteLocale: `en_gb`,
	twitterUsername: `@spences10`,
	authorName: `Scott Spence`,
	backgroundColor: `#f7f0eb`,
	themeColor: `#3D8DD3`,
};

const ICON = "./static/favicon.png";

module.exports = {
	siteMetadata,
	plugins: [
		{
			resolve: `gatsby-plugin-favicon`,
			options: {
				logo: ICON,
				dir: 'auto',
				background: siteMetadata.backgroundColor,
				theme_color: siteMetadata.themeColor,
				display: 'standalone',
				orientation: 'any',
				start_url: '/?homescreen=1',
				version: '1.0',
			},
		},
		`gatsby-plugin-robots-txt`,
		`gatsby-plugin-sitemap`,
		`gatsby-plugin-sass`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/lang`,
				name: `lang`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/announcements`,
				name: `announcements`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/gameHero`,
				name: `gameHero`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/games`,
				name: `games`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/blog`,
				name: `blog`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content/assets`,
				name: `assets`,
			},
		},
		`@pauliescanlon/gatsby-mdx-embed`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`,
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 640,
							withWebp: true,
							tracedSVG: true,
						},
					},
				],
			},
			plugin: [
				{
					resolve: `gatsby-remark-images`,
					options: {
						maxWidth: 680,
					},
				},
			],
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				//trackingId: `ADD YOUR TRACKING ID HERE`,
			},
		},
		`gatsby-plugin-feed-mdx`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: siteMetadata.title,
				short_name: siteMetadata.title,
				start_url: `/`,
				background_color: siteMetadata.backgroundColor,
				theme_color: siteMetadata.themeColor,
				display: `minimal-ui`,
				icon: ICON,
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Roboto`,
						variants: [`300`, `400`, `800`],
					},
					{
						family: `Bellota Text`,
						variants: [`400`],
					},
				],
			},
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		// `gatsby-plugin-offline`,
		{
			resolve: 'gatsby-plugin-copy-files',
			options: {
				source: `${__dirname}/src/lang`,
				destination: '/lang',
			},
		},
	],
};
