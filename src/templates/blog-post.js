import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Post from '../components/Post';
import PostFooter from '../components/PostFooter';

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.mdx;
	const siteTitle = data.site.siteMetadata.title;
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={post.frontmatter.title}
				description={post.frontmatter.description || post.excerpt}
			/>

			<Post
				post={post}
			/>

			<PostFooter
				previous={previous}
				next={next}
			/>
		</Layout>
	);
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
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
`;
