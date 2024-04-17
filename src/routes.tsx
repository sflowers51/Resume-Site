import {createBrowserRouter} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Projects from "./views/Projects";
import ErrorPage from "./views/ErrorPage";

const router = 
    createBrowserRouter(
        [
            {path: "/", element: <Home />},
            {path: "/about", element: <About />},
            {path: "/projects", element: <Projects />},
            {path: "*", element: <ErrorPage/>}
        ]
    )

export default router;