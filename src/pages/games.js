import React from "react";
import { graphql } from "gatsby";

import '../design-system/setup';
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Featured from '../components/Featured';
import GamesHero from '../components/GamesHero';

const BlogIndex = ({ data, location }) => {
	const gameHero = data.gameHero.edges[0];
	const games = data.games.edges;

	const commonProps = {
		location: 'games',
	};

	return (
		<Layout location={location}>
			<SEO title="Games" />

			<GamesHero
				{...commonProps}
				gameHero={gameHero}
			/>

			<Featured
				{...commonProps}
				titleId="site.page.games.title"
				featured={games}
			/>

		</Layout>
	);
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    gameHero: allMdx(
      filter: { fields: { sourceName: { eq: "gameHero" } } },
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
            backgroundColor
          }
        }
      }
    }

    games: allMdx(
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
            backgroundColor
          }
        }
      }
    }
  }
`;
