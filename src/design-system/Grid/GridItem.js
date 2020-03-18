import React from 'react';
import cx from 'classnames';
import Box from '../Box';

import styles from './FlexGrid.module.scss';

const FlexGrid = (props) => {
	return (
		<Box
			{...props}
			className={cx(
				props.className,
				styles.gridItem,
			)}
		/>
	);
};

export default FlexGrid;