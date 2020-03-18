import React from 'react';
import cx from 'classnames';
import { Link } from 'gatsby';
import Card from 'react-bootstrap/Card';

import styles from './CalloutCard.module.scss';

const CalloutCard = (props) => {
	const { children, className, to, ...rest} = props;
    
	const classNames = cx(className, styles.calloutCard);

	return (
		<Card as={Link} to={to} className={classNames} {...rest}>
			{children}
		</Card>
	);
};

export default CalloutCard;