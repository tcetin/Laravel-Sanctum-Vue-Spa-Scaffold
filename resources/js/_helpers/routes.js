import Login from "../components/Login";
import AdminPage from "../components/AdminPage";
import Home from "../components/Home";


export default {
    mode: "history",
    routes: [
        {
            path: "/login",
            component: Login,
            name: "login"
        },
        {
            path: "/",
            name: "admin-page",
            component: AdminPage,
            redirect: { name: "home" },
            children: [
                {
                    path: "/home",
                    component: Home,
                    name: "home",
                },
            ]
        }
    ]
};
