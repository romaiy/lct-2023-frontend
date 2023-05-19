import { Text } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC, useContext } from "react";
import { Context } from "../../main";

const AuthPage: FC = () => {
    const { UStore } = useContext(Context);
    
    return (
        <Text style={{cursor: 'pointer'}} onClick={() => UStore.logout()} size="lg">123</Text>
    );
}

export default observer(AuthPage);