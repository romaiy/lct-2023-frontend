import { Flex, Text } from "@mantine/core";
import { IconQuestionMark } from '@tabler/icons-react';

const NavbarHelp = () => {

    return (
        <Flex gap={24} align="center" style={{padding: '12px 16px'}}>
            <IconQuestionMark stroke="1.5" color='#343A40'/>
            <Text color="gray.8" size="lg" lh={'24px'}>Помощь</Text>
        </Flex>
    );
};

export default NavbarHelp;