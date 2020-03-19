import React from 'react';
import { graphql } from 'gatsby';
import { array, shape } from 'prop-types';
import '../design-system/setup';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Announcement from '../components/Announcement';
import Featured from '../components/Featured';
import Updates from '../components/Updates';

const BlogIndex = ({ data, location }) => {
	const announcement = data.announcement.edges[0];
	const featured = data.featured.edges;
	const posts = data.blog.edges;

	const commonProps = {
		location: 'home',
	};

	return (
		<Layout location={location}>
			<SEO title="Home" />

			<Announcement
				{...commonProps}
				announcement={announcement}
			/>

			<Featured
				{...commonProps}
				featured={featured}
			/>

			<Updates
				{...commonProps}
				posts={posts}
			/>
		</Layout>
	);
};

BlogIndex.propTypes = {
	data: shape({
		announcement: shape({
			edges: array,
		}),
		featured: shape({
			edges: array,
		}),
		blog: shape({
			edges: array,
		}),
	}),
	location: shape({}),
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    announcement: allMdx(
      limit: 1,
      filter: { fields: { sourceName: { eq: "announcements" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          body
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            color
            backgroundColor
          }
        }
      }
    }

    featured: allMdx(
      limit: 6,
      filter: { fields: { sourceName: { eq: "games" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          body
          fields {
            slug
          }
          frontmatter {
            title
            description
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }

    blog: allMdx(
      limit: 6,
      filter: { fields: { sourceName: { eq: "blog" } } },
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            backgroundColor
          }
        }
      }
    }
  }
`;
