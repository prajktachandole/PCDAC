import React from "react";
import {createBrowserRouter} from "react-router-dom";
import App from "./components/App";
import Users from "./components/Users";
import Home from "./components/Home";
import Register from "./components/Register";
import Update from "./components/Update";

  const customRouter = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
        path:'/user',
        element:<Users/>
      },
      {
        path:'/home',
        element:<Home/>

      },
      {
        path:'/register',
        element:<Register/>
      }
      ,
        {
            path: '/update',
            element: <Update />
        },
        ]
      }
    
  ]);

  export default customRouter;