import { Flex, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Context } from "../main";
import { authRoutes, publicRoutes } from "../utils/routes";
import Header from "./Header/Header";
import NavbarNested from "./Navbar/Navbar";

const AppRouter = () => {
    const { UStore } = useContext(Context);
    const location = useLocation();

    if (UStore.isAuth && (location.pathname === '/login' || location.pathname === '/registration')) {
        return <Navigate to='/' replace/>
    };

    if (!UStore.isAuth && (location.pathname === '/' || location.pathname === '/history' || location.pathname === '/database')) {
        return <Navigate to='/login' replace/>
    };

    return (
        <Flex>
            {(UStore.isAuth && (location.pathname !== '/login' && location.pathname !== '/registration')) ? <NavbarNested/> : <></>}
            <Stack spacing="0rem">
                {(UStore.isAuth && (location.pathname !== '/login' && location.pathname !== '/registration')) ? <Header/> : <></>}
                <Routes>
                    {UStore.isAuth && authRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                    {publicRoutes.map(({path, Component}) => 
                        <Route key={path} path={path} element={<Component/>}/>
                    )}
                </Routes>
            </Stack>
        </Flex>
    );
};

export default observer(AppRouter);