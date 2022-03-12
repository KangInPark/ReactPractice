import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Topbtn from "./components/Topbtn";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
	return (
		<Router basename={process.env.PUBLIC_URL}>
			<Navigation />
			<Routes>
				<Route path="/movie/:id" element={<Detail />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
			<Topbtn/>
		</Router>
	);
}

export default App;
