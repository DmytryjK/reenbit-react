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
			path: "/hero",
			element: <HeroPage charId={charId}/>,
		  },
	]);

	return (
		<RouterProvider className="App" router={router}>
			<div className="App">
				{/* <MainPage prop={test}/>
				<HeroPage prop={test}/>
				<ErrorPage/> */}
			</div>
		</RouterProvider>
	);
}

export default App;
