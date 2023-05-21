import { Flex, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CURRENT_ANALYSIS_ROUT } from "../../utils/const";
import { authRoutes } from "../../utils/routes";
import { IconArrowLeft } from '@tabler/icons-react';

const Header = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>('');

    useEffect(() => {
        if (!location.pathname.indexOf('/analysis')) {
            setTitle('Результаты анализа');
        } else {
            const titleIdAuth = authRoutes.map(e => e.path).indexOf(location.pathname);
            setTitle(authRoutes[titleIdAuth].title);
        }
    }, [location]);

    return (
        <Flex align="center" gap={16} style={{padding: '48px 24px 24px'}}>
            {!location.pathname.indexOf(CURRENT_ANALYSIS_ROUT) ? 
                <IconArrowLeft style={{cursor: 'pointer'}} onClick={() => navigate(-1)} stroke={'1.5'}/>
            : <></>}
            <Title size="h2" color="gray.9">{title}</Title>
        </Flex>
    );
};

export default Header;