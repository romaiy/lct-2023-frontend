import { Autocomplete, Button, Flex, Stack, Title, useMantineTheme } from "@mantine/core";
import { IconTrashX } from "@tabler/icons-react";

const ModalEdit = (props: {works: string[] | undefined}) => {
    const theme = useMantineTheme();

    return (
        <Stack spacing={32} style={{padding: '16px'}}>
            <Title style={{textAlign: 'center'}} size="h4" color="gray.9">Редактирование</Title>
            <Stack spacing={24}>
                <Title size="h5" color="gray.9">Виды работ</Title>
                {props.works &&
                <Stack spacing={8}>
                    {props.works!.map((item) => (
                        <Flex key={item} gap={15} justify="space-between">
                            <Autocomplete
                            data={['lala']}
                            value={item}
                            className='input'
                            w={400} h={48}
                            size="lg"
                            lh={'24px'}
                            />
                            <IconTrashX
                            style={{cursor: 'pointer'}} 
                            stroke={'1.5'} 
                            color={theme.colors.red[7]}/>
                        </Flex>
                    ))}
                </Stack>}
                <Flex gap={8} justify="space-between">
                    <Button
                        w={218} h={48}
                        fz='lg'
                        fw={400}

                        style={{color: '#212529', background: 'white'}}
                    >
                        Отменить
                    </Button>
                    <Button
                        w={218} h={48}
                        fz='lg'
                        fw={400}
                        color="red.7"
                    >
                        Сохранить изменения
                    </Button>
                </Flex>
            </Stack>
        </Stack>
    );
};

export default ModalEdit;