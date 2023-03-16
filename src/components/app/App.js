import { createBrowserRouter, Outlet, RouterProvider  } from 'react-router-dom';
import { useState } from 'react';
import {HeroPage, MainPage, ErrorPage, SignInPage} from "../pages";
import { AuthContextProvider } from '../../context/AuthContext';
import Navbar from '../navbar/Navbar';

const App = () => {
	const [charId, setCharId] = useState(null);
	
	const currentCharId = (id) => {
		setCharId(id);
	}

	const AppLayout = () => {
		return(
			<>
				<Navbar/>
				<Outlet/>
			</>
		)
	}

	const router = createBrowserRouter([
		{
			element: <AppLayout/>,
			children: [
				{
					path: "/",
					element: <MainPage charId={currentCharId}/>,
				  },
				  {
					  path: "hero/:id",
					  element: <HeroPage charId={charId}/>,
				  },
				  {
					  path: "signIn",
					  element: <SignInPage/>
				  },
				  {
					  path: "*",
					  element: <ErrorPage />,
				  }
			]
		},
		

	]);

	return (
		<div className="App">
			<AuthContextProvider>
				<RouterProvider router={router}/>
			</AuthContextProvider>
		</div>
	);
}

export default App;
