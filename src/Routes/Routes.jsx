import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Home/Register";
import News from "../pages/Home/News";
import PrivateRoute from "../pages/Home/PrivateRoute";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('/news.json')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'/news/:id',
            element:<PrivateRoute><News></News></PrivateRoute>
            }
        ]
    }
])

export default routes;