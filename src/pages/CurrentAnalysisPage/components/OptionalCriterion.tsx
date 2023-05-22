import { Stack, Text } from "@mantine/core";
import AnalysisInput from "../../HomePage/components/AnalysisInput";

const OptionalCriterion = () => {

    return (
        <Stack spacing={16}>
            <Text color="gray.5" size="md" lh={'20px'}>Опциональные</Text>
            <AnalysisInput work={'work'} object={'object'} date={[null, null]} disabled={true}/>
        </Stack>
    );
}

export default OptionalCriterion;