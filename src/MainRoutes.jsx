//react-router-dom
import { useRoutes } from "react-router-dom";
import { Home } from "./HomePage/Home";
import { Project } from "./ProjectPage/Project";

//routing pages


//================|| ROUTING RENDER ||===================//

export default function ThemeRoutes() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/Project",
            element: <Project />,
        },
    ]);
}
