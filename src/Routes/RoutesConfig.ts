import Home from "../Pages/Home";
import Blogs from "../Pages/Blogs";
import About from "../Pages/About";

interface Route {
    name: string;
    path: string;
    component: React.FC;
}

const Routes: Route[] = [
    {
        name: "Home",
        path: "/home",
        component: Home
    },
    {
        name: "About",
        path: "/about",
        component: About
    },
    {
        name: "Blogs",
        path: "/blogs",
        component: Blogs
    }
]

export default Routes;