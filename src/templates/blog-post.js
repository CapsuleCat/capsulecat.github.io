import React from 'react';
import { graphql } from 'gatsby';
import { bool, shape, string } from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Post from '../components/Post';
import PostFooter from '../components/PostFooter';

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const post = data.mdx;
	const siteTitle = data.site.siteMetadata.title;
	const { frontmatter, excerpt } = post;
	const { title, description } = frontmatter;
	const { previous, next } = pageContext;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={title}
				description={description || excerpt}
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

BlogPostTemplate.propTypes = {
	data: shape({
		mdx: shape({
			excerpt: string,
			frontmatter: shape({
				title: string,
				description: string,
			}),
		}),
		site: shape({
			siteMetadata: shape({
				title: string,
			}),
		}),
	}),
	location: shape({}),
	pageContext: shape({
		next: bool,
		previous: bool,
	}),
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
