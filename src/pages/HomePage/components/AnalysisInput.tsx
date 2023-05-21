import { Autocomplete, createStyles, Flex, Stack } from "@mantine/core";
import { DatePickerInput } from "@mantine/dates";

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

interface AnalysisInputProps {
    work: string;
    object: string;
    date: [Date | null, Date | null];
    setWork: React.Dispatch<React.SetStateAction<string>>;
    setObject: React.Dispatch<React.SetStateAction<string>>;
    setDate: React.Dispatch<React.SetStateAction<[Date | null, Date | null]>>;
}

const AnalysisInput = ({ work, object, date, setWork, setObject, setDate }: AnalysisInputProps) => {
    const { classes } = useStyles();

    return (
        <Stack spacing={24}>
            <Flex className={classes.wrapper} gap={16}>
                <Autocomplete
                    className='input'
                    w={443.5}
                    lh={'24px'}
                    size="lg"
                    value={object}
                    onChange={setObject}
                    label="Категория объекта"
                    limit={6}
                    data={['React', 'Angular', 'Svelte', 'Vue']}
                    placeholder="Двор"
                />
                <DatePickerInput
                    valueFormat="YYYY-MM-DD"
                    className='input'
                    w={443.5}
                    size="lg"
                    lh={'24px'}
                    type="range"
                    label="Отчетный период"
                    value={date}
                    onChange={setDate}
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
                value={work}
                onChange={setWork}
            />
        </Stack>
    );
};

export default AnalysisInput;