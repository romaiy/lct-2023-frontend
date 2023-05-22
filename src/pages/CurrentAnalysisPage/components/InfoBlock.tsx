import { createStyles, Flex } from "@mantine/core";
import BlockWrapper from "../../../components/Wrappers/BlockWrapper";
import { IAnalysis } from "../../../models/IAnalysis";
import MainCriterion from "./MainCriterion";
import OptionalCriterion from "./OptionalCriterion";

const useStyles = createStyles((theme) => ({

    wrapper: {
        padding: '24px',
        background: theme.colors.gray[0],
        borderRadius: '16px',
    }
}))

const InfoBlock = ({type}: IAnalysis) => {
    const { classes } = useStyles();
    return (
        <Flex className={classes.wrapper}>
            <BlockWrapper >
                Используемые критерии
                <MainCriterion/>
                {type === 'base' ? <></> :
                    <OptionalCriterion/>
                }
            </BlockWrapper>
        </Flex>
    );
};

export default InfoBlock;