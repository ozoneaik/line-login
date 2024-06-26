import {createBrowserRouter} from "react-router-dom";
import App from "./App.jsx";
import Test from "./Test.jsx";
import LineLogin from "./LineLogin.jsx";

export const routes = createBrowserRouter([
    {path: '/',element: <App/>},
    {path: '/test',element: <Test/>},
    {path: 'line-login',element: <LineLogin/>}
])