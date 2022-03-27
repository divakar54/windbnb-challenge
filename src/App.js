import { Provider } from "react-redux";
import "./App.css";
import { Header } from "./components/Header/Header";
import store from "./redux/store/store.js";
import Locations from "./components/Locations/Locations";
import Container from "./containers/Container/Container";

function App() {
	return (
		<Provider store={store}>
			<Container>
				<Header />
				<Locations />
			</Container>
		</Provider>
	);
}

export default App;
