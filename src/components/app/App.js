import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import {HeroPage, MainPage, ErrorPage} from "../pages";

const router = createBrowserRouter([
	{
	  path: "/",
	  element: <MainPage/>,
	},
	{
		path: "/hero",
		element: <HeroPage/>,
	  },
]);

function App() {

	return (
		<div className="App">
			<RouterProvider router={router}>
				<MainPage/>
				<HeroPage/>
				<ErrorPage/>
			</RouterProvider>
		</div>
	);
}

export default App;
