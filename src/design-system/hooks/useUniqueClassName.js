import { useRef } from 'react';

let uniqueId = 0;
const getUniqueId = () => uniqueId++;

const useUniqueClassName = (className) => {
	const id = useRef(getUniqueId());
	const uniqueClassName = `${className}--${id.current}`;

	return uniqueClassName;
};

export default useUniqueClassName;