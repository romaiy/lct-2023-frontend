import { Button } from "@mantine/core";

type AnalysisButtonProps = {
    children?: React.ReactNode;
    toggle: Function;
    opened: boolean;
};

const AnalysisButton = ({children, toggle, opened}: AnalysisButtonProps) => {

    if (children === 'Базовый анализ') {
        return (
            <Button
                fz='lg'
                w={164} h={48}
                color="gray.9"
                fw={400}
            >
                Начать
            </Button>
        );
    } else {
        return (
            <Button
                style={opened ? {display: 'none'} : {}}
                fz='lg'
                w={164} h={48}
                color="gray.9"
                fw={400}
                onClick={() => toggle()}
            >
                Выбрать
            </Button>
        );
    }
};

export default AnalysisButton;