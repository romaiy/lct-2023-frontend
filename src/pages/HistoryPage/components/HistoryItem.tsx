import { createStyles, Stack } from "@mantine/core";
import { IAnalysis } from "../../../models/IAnalysis";
import ItemFooter from "./ItemFooter";
import ItemHeading from "./ItemHeading";

const useStyles = createStyles(() => ({

    wrapper: {
        border: '1px solid #E9ECEF',
        borderRadius: '16px',
        padding: '23px'
    },
}));

const HistoryItem = ({type, date, _id}: IAnalysis) => {
    const { classes } = useStyles();

    return (
        <Stack className={classes.wrapper} spacing={16}>
            <ItemHeading type={type!} date={date!}/>
            <ItemFooter type={type!} _id={_id!}/>
        </Stack>
    );
};

export default HistoryItem;