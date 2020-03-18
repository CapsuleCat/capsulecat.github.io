
export const onClientEntry = () => {
	if (!(`IntersectionObserver` in window)) {
		// eslint-disable-next-line no-unused-expressions
		import(`intersection-observer`);
	}
};