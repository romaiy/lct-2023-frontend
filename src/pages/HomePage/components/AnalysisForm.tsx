import { Autocomplete, Button, createStyles, Flex, Stack } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";
import { useState } from "react";
import AnalysisOrigin from "./AnalysisOrigin";

const useStyles = createStyles((_theme) => ({
    job: {
        input: {
            background: '#F8F9FA'
        },
        label: {
            marginBottom: '4px',
        }
    },
    wrapper: {
        marginTop: '24px'
    }
}));

const AnalysisForm = () => {
    const { classes } = useStyles();
    const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

    return (
        <Flex gap={24} align="flex-end">
            <Stack spacing={24}>
            <Flex className={classes.wrapper} gap={16}>
                <Autocomplete
                    className='input'
                    w={443.5}
                    lh={'24px'}
                    size="lg"
                    label="Категория объекта"
                    limit={6}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    placeholder="Двор"
                />
                <DatePickerInput
                    valueFormat="DD.MM.YYYY"
                    className='input'
                    w={443.5}
                    size="lg"
                    lh={'24px'}
                    type="range"
                    label="Отчетный период"
                    value={value}
                    onChange={setValue}
                />
            </Flex>
            <Autocomplete
                className={classes.job}
                label="Вид работ"
                placeholder="Проверка изоляции проводов"
                size="lg"
                w={903}
                lh={'24px'}
                limit={2}
                data={['React', 'Angular', 'Svelte', 'Vue']}
            />
            <AnalysisOrigin/>
            </Stack>
            <Button
                fz='lg'
                w={164} h={48}
                color="red.7"
                fw={400}
            >
                Начать
            </Button>
        </Flex>
    );
};

export default AnalysisForm;