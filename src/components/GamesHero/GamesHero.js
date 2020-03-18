import React from 'react';
import cz from 'classnames';
import BackgroundImage from 'gatsby-background-image';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

import styles from './GamesHero.module.scss';

const JumbotronWrapper = React.forwardRef((props, ref) => <Jumbotron ref={ref} {...props} />);

const GamesHero = (props) => {
	const { gameHero } = props;
	const { frontmatter } = gameHero.node;
	const { image, backgroundColor } = frontmatter;

	return (
		<BackgroundImage
			Tag={JumbotronWrapper}
			className={cz(styles.gamesHero, styles.fullHeight)}
			fluid={image.childImageSharp.fluid}
			backgroundColor={backgroundColor}
		>
			<Container className={styles.fullHeight} />
		</BackgroundImage>
	);
};

export default GamesHero;