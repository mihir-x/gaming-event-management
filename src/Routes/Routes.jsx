import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import About from "../Pages/About/About";


const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/about',
                element: <About></About>
            }
        ]
    }
])

export default Routes;