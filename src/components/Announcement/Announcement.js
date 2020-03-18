import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";

import Hero from '../../design-system/Hero';

const Announcement = (props) => {
	const { announcement } = props;
	const { body, frontmatter } = announcement.node;
	const { image, color, backgroundColor } = frontmatter;

	const contentProps = {};

	if (color) {
		contentProps.style = {
			color,
		};
	}

	return (
		<Hero
			image={image}
			backgroundColor={backgroundColor}
			color={color}
			position="right"
			center
			height="60vh"
		>
			<MDXRenderer>{body}</MDXRenderer>
		</Hero>
	);

	// return (
	// 	<BackgroundImage
	// 		Tag={JumbotronWrapper}
	// 		className={cz(styles.announcementJumbotron, styles.fullHeight)}
	// 		fluid={image.childImageSharp.fluid}
	// 		backgroundColor={backgroundColor}
	// 	>
	// 		<Container as="header" className={styles.fullHeight}>
	// 			<Row style={{ width: '100%' }}>
	// 				<Col className={styles.fullHeight} />
	// 				<Col className={styles.fullHeight}>
	// 					<AnnouncementContent {...contentProps}>
	// 						<MDXRenderer>{body}</MDXRenderer>
	// 					</AnnouncementContent>
	// 				</Col>
	// 			</Row>
	// 		</Container>
	// 	</BackgroundImage>
	// );
};

export default Announcement;