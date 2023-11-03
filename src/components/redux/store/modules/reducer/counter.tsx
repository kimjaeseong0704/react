// 초기값 설정
const initialState = {
	number: 0,
};

// counterReducer
export default function counter(
	state = initialState,
	action: { type: string }
) {
	switch (action.type) {
		case "INCREMENT":
			return {
				number: state.number + 1,
			};
		case "DECREMENT":
			return {
				number: state.number - 1,
			};
		default:
			return state;
	}
}
