import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../store/modules/action/counter";

export default function Counter() {
	const dispatch = useDispatch();

	// import한 리듀서 이름을 그대로 사용하는 경우
	const count = useSelector((state: any) => state.counter.number);

	// 리듀서 이름을 지정하는 경우
	// const count = useSelector((state) => state.counterData.number);

	return (
		<div>
			<h4>COUNTER : {count}</h4>
			<br />
			<button onClick={() => dispatch(increment())}> + </button>
			<button onClick={() => dispatch(decrement())}> - </button>
		</div>
	);
}
