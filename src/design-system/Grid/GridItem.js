import React from 'react';
import { string } from 'prop-types';
import cx from 'classnames';
import Box from '../Box';

import styles from './FlexGrid.module.scss';

const FlexGrid = (props) => {
	const { className, ...rest } = props;
	return (
		<Box
			{...rest}
			className={cx(
				className,
				styles.gridItem,
			)}
		/>
	);
};

FlexGrid.propTypes = {
	className: string,
};

export default FlexGrid;