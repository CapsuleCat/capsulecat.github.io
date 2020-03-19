import React from 'react';
import { graphql } from 'gatsby';
import { shape, string } from 'prop-types';

import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Game from '../components/Game';

const GameItemTemplate = ({ data, location }) => {
	const game = data.mdx;
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout location={location} title={siteTitle}>
			<SEO
				title={game.frontmatter.title}
				description={game.frontmatter.description || game.excerpt}
			/>

			<Game
				game={game}
			/>
		</Layout>
	);
};

GameItemTemplate.propTypes = {
	data: shape({
		mdx: shape({
			site: shape({
				siteMetadata: shape({
					title: string,
				}),
			}),
		}),
	}),
	location: shape({}),
};

export default GameItemTemplate;

export const pageQuery = graphql`
  query GameItemBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
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
