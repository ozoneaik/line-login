import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Test from "./Test.jsx";

export const routes = createBrowserRouter([
    {path: '/',element: <App/>},
    {path: '/',element: <Test/>},
])