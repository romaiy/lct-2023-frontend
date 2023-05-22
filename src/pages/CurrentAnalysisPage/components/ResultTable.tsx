import { useMemo } from 'react';
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import { Box, Button, Flex, List, MantineProvider, useMantineTheme } from '@mantine/core';
import { IconArrowsMaximize, IconEdit, IconTrashX } from '@tabler/icons-react';

type IAnalysisResult = {
    workname: string[];
    adress: string;
    priority: string;
};

const Example = (props: 
    {result: IAnalysisResult[], handleAdressDelete: Function, open: () => void, handleSetWorks: Function}) => {
    const theme = useMantineTheme();

    const handleEditClick = (workname: string[]) => {
        props.handleSetWorks(workname);
        props.open();
    };

    const columns = useMemo<MRT_ColumnDef<IAnalysisResult>[]>(
        () => [
            {
                accessorKey: 'adress',
                id: 'adress', 
                header: 'Адрес объекта',
            },
            {
                accessorKey: 'priority', 
                header: 'Характеристика',
                Cell: ({ cell }) => (
                    <Box
                        sx={(theme) => ({
                            background: cell.getValue<string>() === 'Срочная работа' 
                            ? theme.colors.red[7] : theme.colors.gray[9],
                            borderRadius: '16px',
                            color: '#fff',
                            padding: '4px 12px',
                            display: 'inline-block'
                        })}
                    >
                        {cell.getValue<string>()}
                    </Box>
                ),
            },
            {
                accessorKey: 'workname',
                header: 'Рекомендуемые работы',
                Cell: ({ cell }) => (
                    <List
                        size="sm"
                        sx={(_theme) => ({
                            fontSize: '16px'
                        })}
                    >
                        {cell.getValue<string[]>().map((item) => (
                            <List.Item key={item}>{item}</List.Item>
                        ))}
                    </List>
                ),
            },
        ],
        [],
    );
    
    return (
        <MantineProvider
            theme={{
                primaryColor: 'red',
            }}
        >
        <MantineReactTable
            initialState={{ showColumnFilters: true }}
            columns={columns}
            data={props.result}
            enableColumnOrdering
            enablePinning
            enableRowActions
            enableRowSelection
            enableSorting
            enableColumnActions={false}
            enableColumnDragging={false}
            enableToolbarInternalActions={false}
            positionToolbarAlertBanner="none"
            mantineTableBodyProps={{
                sx: {
                    '& td:nth-of-type(n)': {
                        padding: '24px 16px',
                        fontSize: '16px',
                        lineHeight: '24px',
                        color: '#212529'
                    },
                },
            }}
            mantineTableHeadProps={{
                sx: {
                    '& th:nth-of-type(n)': {
                        padding: '24px 16px 23px',
                        fontSize: '16px',
                        lineHeight: '22px',
                        color: '#212529',

                        'input[type=text]': {
                            marginTop: '8px',
                            height: '31px'
                        }
                    },
                }
            }}
            mantineTopToolbarProps={{
                sx: {
                    padding: '8px'
                }
            }}
            mantineSelectAllCheckboxProps={{
                color: 'red.7',
                sx: {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'

                }
                
            }}
            mantinePaperProps={{
                sx: {
                    borderRadius: '8px',
                    boxShadow: 'none',
                    border: '1px solid #E9ECEF',
                },
            }}
            renderColumnActionsMenuItems={() => {
                return (
                    <>123</>
                )
            }}
            renderTopToolbarCustomActions={({ table }) => {
                
                const handleActivate = () => {
                    table.getSelectedRowModel().flatRows.map((row) => {
                        console.log('activating ' + row.getValue('name'));
                    });
                };
                
                return (
                        <Button
                            fz='lg'
                            w={212} h={48}
                            fw={400}
                            style={{color: '#1C1C1C', background: 'white', 
                            border: '1px solid #ADB5BD', cursor: 'pointer'}}
                            onClick={handleActivate}
                            
                        >
                            Смотреть на карте
                        </Button>
                );
            }}

            renderRowActions={({cell}) => {
                return (
                    <Flex gap={10} align="center">
                        <IconArrowsMaximize
                            style={{cursor: 'pointer'}} 
                            stroke={'1.5'} 
                            color={theme.colors.gray[9]}/>
                        <IconEdit
                            onClick={() => handleEditClick(cell.row._valuesCache.workname)}
                            style={{cursor: 'pointer'}} 
                            stroke={'1.5'} 
                            color={theme.colors.gray[9]}/>
                        <IconTrashX
                            onClick={() => props.handleAdressDelete(cell.row._valuesCache.adress)}
                            style={{cursor: 'pointer'}} 
                            stroke={'1.5'} 
                            color={theme.colors.red[7]}/>
                    </Flex>
                );
            }}
        />
        </MantineProvider>
    );
};

export default Example;