import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/modules/reducer";
import Counter from "./components/Counter";

const store = createStore(rootReducer);

const Redux = () => {
	return (
		<>
			<Provider store={store}>
				<h1>Redux : Ducks 패턴</h1>
				<Counter></Counter>
			</Provider>
		</>
	);
};

export default Redux;
