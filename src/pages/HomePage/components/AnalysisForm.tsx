import { Button, Flex, Stack } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../../main";
import AnalysisInput from "./AnalysisInput";
import AnalysisOrigin from "./AnalysisOrigin";



const AnalysisForm = () => {
    const { AStore } = useContext(Context);
    
    const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);
    const [object, setObject] = useState<string>('');
    const [work, setWork] = useState<string>('');
    const [origin, setOrigin] = useState<string>('database');
    const [url, setUrl] = useState<string>('');

    const [btnDisabled, setBtnDisabled] = useState<boolean>(true);

    useEffect(() => {
        if (origin === 'database') {
            if (date && object && work) {
                setBtnDisabled(false);
            } else {
                setBtnDisabled(true);
            }
        } else if (origin === 'url') {
            if (date && object && work && url) {
                setBtnDisabled(false);
            } else {
                setBtnDisabled(true);
            }
        } 
    }, origin==='url' ? [work, date, object, url] : 
    [work, date, object, origin])

    const handlePost = async () => {
        if (origin === 'database') {
            AStore.smartAnalysisDatabase(object, date, work);
        } 
    };

    return (
        <Flex gap={24} align="flex-end">
            <Stack spacing={24}>
            <AnalysisInput 
                work={work}
                setWork={setWork}
                object={object}
                setObject={setObject}
                date={date}
                setDate={setDate}
            />
            <AnalysisOrigin url={url} setUrl={setUrl} setOrigin={setOrigin} origin={origin}/>
            </Stack>
            <Button
                fz='lg'
                w={164} h={48}
                color="red.7"
                fw={400}
                disabled={btnDisabled}
                onClick={handlePost}
            >
                Начать
            </Button>
        </Flex>
    );
};

export default observer(AnalysisForm);