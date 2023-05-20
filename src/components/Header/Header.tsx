import { Flex, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { authRoutes } from "../../utils/routes";

const Header = () => {
    const location = useLocation();
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        const titleIdAuth = authRoutes.map(e => e.path).indexOf(location.pathname);
        setTitle(authRoutes[titleIdAuth].title);
    }, [location]);

    return (
        <Flex style={{padding: '48px 24px 24px'}}>
            <Title size="h2" color="gray.9">{title}</Title>
        </Flex>
    );
};

export default Header;