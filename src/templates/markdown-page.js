import React from 'react';
import { string, shape } from 'prop-types';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

const MarkDownPage = ({ data, location }) => {
	const { mdx } = data;
	const { frontmatter, body, excerpt } = mdx;
	const { title, description } = frontmatter;

	return (
		<Layout location={location} title={title}>
			<SEO
				title={title}
				description={description || excerpt}
			/>

			<Container className="my-5">
				<Row>
					<Col>
						<MDXRenderer>{body}</MDXRenderer>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

MarkDownPage.propTypes = {
	data: shape({
		mdx: shape({
			frontmatter: shape({
				title: string,
				description: string,
			}),
			body: string,
			excerpt: string,
		}),
	}),
	location: shape({}),
};

export default MarkDownPage;

export const pageQuery = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
	  excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
		description
        title
      }
    }
  }
`;