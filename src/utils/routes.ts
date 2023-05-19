import AuthPage from "../pages/AuthPage"
import HomePage from "../pages/HomePage"
import { HOME_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "./const"

export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: HomePage,
        title: 'О проекте',
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: AuthPage,
        title: 'afs1',
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage,
        title: '1sadf',
    },
]