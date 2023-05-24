import { Flex, List, Text, createStyles } from "@mantine/core";
import { useLocation } from "react-router-dom";
import BlockWrapper from "../../../components/Wrappers/BlockWrapper";

const useStyles = createStyles((theme) => ({

    wrapper: {
        padding: '24px',
        background: theme.colors.gray[0],
        borderRadius: '16px',
        width: '369px'
    }
}))

const Addresses = () => {
    const location = useLocation();
    const { classes } = useStyles();

    return (
        <Flex className={classes.wrapper}>
            <BlockWrapper>
                Выбранные адреса
                <List spacing={16}>
                    {location.state.addresses.map((item: string) => (
                        <List.Item key={item}>
                            <Text color="gray.9" size="lg" lh={'24px'} >
                                {item}
                            </Text>
                        </List.Item>
                    ))}
                </List>
            </BlockWrapper>
        </Flex>
    );
};

export default Addresses;