import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BackgroundImage from 'gatsby-background-image';
import cz from 'classnames';

import Box from '../Box';
import styles from './Hero.module.scss';

const JumbotronWrapper = React.forwardRef((props, ref) => <Jumbotron ref={ref} {...props} />);

const Hero = (props) => {
	const {
		image,
		backgroundColor,
		color,
		position,
		center,
		height = '40vh',
		children,
		...rest
	} = props;
    
	const fullHeightStyle = {
		display: 'flex',
		minHeight: height,
	};
    
	let before = null;
	let after = null;

	switch (position) {
	case 'left':
		after = <Col />;
		break;
	case 'center':
		after = <Col />;
		before = <Col />;
		break;
	case 'right':
		before = <Col />;
		break;
	default:
        // nothing
	}

	let innerContent = (
		<Container as="header" className={styles.heroInner}>
			<Row style={{ width: '100%' }}>
				{before}
				<Col className={styles.heroInner}>
					<Box
						className={cz({
							"text-center": center,
						})}
						verticalCenter
					>
						{children}
					</Box>
				</Col>
				{after}
			</Row>
		</Container>
	);
    
	if (!image) {
		return (
			<Jumbotron backgroundColor={backgroundColor}>
				{innerContent}
			</Jumbotron>
		);
	}

	return (
		<BackgroundImage
			Tag={JumbotronWrapper}
			fluid={image.childImageSharp.fluid}
			backgroundColor={backgroundColor}
			style={fullHeightStyle}
			{...rest}
		>
			{innerContent}
		</BackgroundImage>
	);
};

export default Hero;