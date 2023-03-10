import { createBrowserRouter, RouterProvider  } from 'react-router-dom';
import { useState } from 'react';
import {HeroPage, MainPage, ErrorPage} from "../pages";

const App = () => {
	const [charId, setCharId] = useState(null);
	
	const currentCharId = (id) => {
		setCharId(id);
	}

	const router = createBrowserRouter([
		{
		  path: "/",
		  element: <MainPage charId={currentCharId}/>,
		},
		{
			path: `hero/:id`,
			element: <HeroPage charId={charId}/>,
		},
		{
			path: `*`,
			element: <ErrorPage />,
		},
		

	]);

	return (
		<div className="App">
			<RouterProvider router={router}/>
		</div>
	);
}

export default App;
