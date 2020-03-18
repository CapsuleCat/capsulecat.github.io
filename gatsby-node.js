const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const createPaginatedPages = require('gatsby-paginate');


exports.createSchemaCustomization = ({ actions, schema }) => {
	const { createTypes } = actions;
	const typeDefs = [
		`type MdxFields {
			sourceName: String
		}`,
	];
	createTypes(typeDefs);
};

const createGames = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
        {
            site {
                siteMetadata {
                    siteUrl
                }
			}
			allMdx(
				filter: { fields: { sourceName: { eq: "games" } } },
				sort: { fields: [frontmatter___date], order: DESC }
			) {
                edges {
                    node {
                        id
                        body
                        excerpt
                        frontmatter {
							title
							description
							date(formatString: "DD MMMM, YYYY")
							color
							backgroundColor
                            image {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 1025) {
                                        base64
                                        aspectRatio
                                        src
                                        srcSet
                                        sizes
                                    }
                                    fixed(width: 1025){
                                        src
                                        width
                                        height
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
	`);

	if (result.errors) {
		throw result.errors;
	}

	const posts = result.data.allMdx.edges;

	return posts.forEach(({ node }, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/game-item.js`),
			context: {
				slug: node.fields.slug,
				previous,
				next,
				site: result.data.site,
				node,
			},
		});
	});
};

const createArticles = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const result = await graphql(`
        {
            site {
                siteMetadata {
                    siteUrl
                }
			}
			allMdx(
				filter: { fields: { sourceName: { eq: "blog" } } },
				sort: { fields: [frontmatter___date], order: DESC }
			) {
                edges {
                    node {
                        id
                        body
                        excerpt
                        frontmatter {
							title
							description
							date(formatString: "DD MMMM, YYYY")
							color
							backgroundColor
                            image {
                                publicURL
                                childImageSharp {
                                    fluid(maxWidth: 1025) {
                                        base64
                                        aspectRatio
                                        src
                                        srcSet
                                        sizes
                                    }
                                    fixed(width: 1025){
                                        src
                                        width
                                        height
                                    }
                                }
                            }
                        }
                        fields {
                            slug
                        }
                    }
                }
            }
        }
	`);

	if (result.errors) {
		throw result.errors;
	}

	await createPaginatedPages({
		edges: result.data.allMdx.edges,
		createPage: createPage,
		pageTemplate: 'src/templates/blog.js',
		pathPrefix: 'blog',
	});

	const posts = result.data.allMdx.edges;

	return posts.forEach(({ node }, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;
		createPage({
			path: node.fields.slug,
			component: path.resolve(`./src/templates/blog-post.js`),
			context: {
				slug: node.fields.slug,
				previous,
				next,
				site: result.data.site,
				node,
			},
		});
	});
};

exports.createPages = async ({ graphql, actions }) => {
	return Promise.all([
		createArticles({ graphql, actions }),
		createGames({ graphql, actions }),
	]);
};

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions;

	if (node.internal.type === `Mdx`) {
		const parent = getNode(node.parent);
		const slug = `/${parent.sourceInstanceName}${createFilePath({ node, getNode })}`;

		createNodeField({
			name: `sourceName`,
			node,
			value: parent.sourceInstanceName,
		});

		createNodeField({
			name: `slug`,
			node,
			value: slug,
		});
	}
};
