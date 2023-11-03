// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// Action Creator
export const increment = () => {
	return {
		type: INCREMENT,
	};
};
export const decrement = () => {
	return {
		type: DECREMENT,
	};
};
