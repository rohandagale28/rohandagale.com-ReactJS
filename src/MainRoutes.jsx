//react-router-dom
import { useRoutes } from "react-router-dom";
import { Home } from "./HomePage/Home";
import { Project } from "./ProjectPage/Project";
import { TechStackPage } from "./TechStackPage/TechStackPage";

//routing pages


//================|| ROUTING RENDER ||===================//

export default function ThemeRoutes() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/project",
            element: <Project />,
        },
        {
            path: "/techstack",
            element: <TechStackPage />,
        },
    ]);
}
