import { createStyles, SegmentedControl, Stack, TextInput } from "@mantine/core";
import { useState } from "react";
import FileUpload from "./FileUpload";

const useStyles = createStyles((_theme) => ({
    segment: {
        input: {
            background: '#F8F9FA'
        },
        label: {
            fontSize: '16px',
            lineHeight: '24px',
            padding: '4px 12px'
        },
    },

}));

const AnalysisOrigin = () => {
    const { classes } = useStyles();
    const [value, setValue] = useState('database');
    
    return (
        <Stack spacing={24}>
            <SegmentedControl
                value={value}
                onChange={setValue}
                className={classes.segment}
                data={[
                    { label: 'База данных', value: 'database' },
                    { label: 'Сторонний сервис', value: 'url' },
                    { label: 'Загрузка', value: 'download' },
                ]}
                w={380}
                lh={'24px'}
            />
            {value === 'url' ? 
                <TextInput
                    className='input'
                    w={443.5}
                    lh={'24px'}
                    size="lg"
                    label="Выберите источник"
                    placeholder="http://localhost:3000/"
                />
            : value === 'download' ? 
                <FileUpload/>
            : <></>}
        </Stack>
    );
};

export default AnalysisOrigin;