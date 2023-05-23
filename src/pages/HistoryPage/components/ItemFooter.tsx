import { Button, Flex, Text } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { CURRENT_ANALYSIS_ROUT } from "../../../utils/const";

const ItemFooter = (props: {type: string, _id: string}) => {
    const navigate = useNavigate();

    const footer = () => {
        return (
            <Flex gap={4} align="center">
                <Text size="lg" lh={'24px'} color="gray.9">Критерии:</Text>
                {props.type === 'base' ?
                    <Text size="lg" lh={'24px'} color="gray.6">-</Text>
                :
                    <Text size="lg" lh={'24px'} color="gray.6">1</Text>
                }
            </Flex>
        );
    };

    return (
        <Flex align="center" justify="space-between">
            {footer()}
            <Button
                onClick={() => navigate(CURRENT_ANALYSIS_ROUT + '/' + props._id)} 
                h={48} w={164}
                fz='lg'
                fw={400}
                style={{color: '#1C1C1C', background: 'white', 
                border: '1px solid #ADB5BD', cursor: 'pointer'}}
            >
                Смотреть
            </Button>
        </Flex>
    );
};

export default ItemFooter;