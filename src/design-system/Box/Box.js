import React from 'react';
import cx from 'classnames';
import { bool, string } from 'prop-types';

import styles from './Box.module.scss';

const Box = (props) => {
	const { className, display, verticalCenter, ...rest } = props;

	return (
		<div
			{...rest}
			className={cx(
				className,
				styles.box,
				{
					[styles.boxBlock]: display === 'block',
					[styles.verticalCenter]: verticalCenter,
				},
			)}
		/>
	);
};

Box.propTypes = {
	className: string,
	verticalCenter: bool,
};

export default Box;