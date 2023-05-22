import { Autocomplete, Button, createStyles, Flex, Stack, TextInput } from "@mantine/core";
import BlockWrapper from "../../../components/Wrappers/BlockWrapper";

const useStyles = createStyles((theme) => ({
    wrapper: {
        padding: '24px',
        borderRadius: '16px',
        background: theme.colors.gray[0],
        width: '369px'
    }
}));

const FileExport = () => {
    const { classes } = useStyles();

    return (
        <Flex className={classes.wrapper}>
            <BlockWrapper>
                Параметры экспорта
                <Stack spacing={16}>
                    <Autocomplete
                        data={['.xlsx', '.xls', '.csv']}
                        placeholder='.xlsx'
                        label="Тип файла"
                        className="input"
                        size="lg"
                        w={321}
                    />
                    <TextInput
                        label="Имя файла"
                        className="input"
                        size="lg"
                        w={321}
                        placeholder="Сводка по работам"
                    />
                </Stack>
                <Button
                    fz='lg'
                    w={321} h={48}
                    color="gray.9"
                    fw={400}
                >
                    Скачать файл
                </Button>
            </BlockWrapper>
        </Flex>
    );
};

export default FileExport;