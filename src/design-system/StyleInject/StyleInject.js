import { useEffect } from 'react';

const StyleInject = (props) => {
	const { style } = props;

	useEffect(() => {
		const head = document.head;
		const styleEl = document.createElement('style');

		head.appendChild(styleEl);

		styleEl.type = 'text/css';
		if (styleEl.styleSheet) {
			styleEl.styleSheet.cssText = style;
		} else {
			styleEl.appendChild(document.createTextNode(style));
		}


		return () => {
			head.removeChild(styleEl);
		};
	}, [style]);

	return props.children;
};

export default StyleInject;
