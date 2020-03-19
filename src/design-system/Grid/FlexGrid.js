import React from 'react';
import { number, string } from 'prop-types';
import cx from 'classnames';

import Box from '../Box';
import StyleInject from '../StyleInject';
import useUniqueClassName from '../hooks/useUniqueClassName';

import styles from './FlexGrid.module.scss';

const FlexGrid = (props) => {
	const uniqueClassName = useUniqueClassName(styles.flexGrid);
	const { maxColumns = 3, className, ...rest } = props;
    
	return (
		<StyleInject style={`
            .${uniqueClassName} {
                --columns: ${maxColumns};
            }
        `}>
			<Box
				{...rest}
				className={cx(
					className,
					uniqueClassName,
					styles.flexGrid,
				)}
			/>
		</StyleInject>
	);
};

FlexGrid.propTypes = {
	className: string,
	maxColumns: number,
}; 

export default FlexGrid;