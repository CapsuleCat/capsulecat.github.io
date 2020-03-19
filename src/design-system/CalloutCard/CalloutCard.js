import React from 'react';
import { func, node, string, oneOfType } from 'prop-types';
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

CalloutCard.propTypes = {
	children: oneOfType([node, func]),
	className: string,
	to: string,
};

export default CalloutCard;