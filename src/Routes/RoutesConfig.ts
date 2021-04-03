import Hero from "../Pages/Hero";
import Blogs from "../Pages/Blogs";
import About from "../Pages/About";

interface Route {
    name: string;
    path: string;
    component: React.FC;
}

const Routes: Route[] = [
    {
        name: "Default",
        path: "/",
        component: Hero
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