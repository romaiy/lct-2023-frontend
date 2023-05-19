import { Context } from "../../main";
import { ActionIcon, Button, Card, Container, Flex, Group, Image, PasswordInput, Space, Stack, Text, TextInput, ThemeIcon, Title } from "@mantine/core";
import { observer } from "mobx-react-lite";
import { FC, useContext, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const AuthPage: FC = () => {
    const { UStore } = useContext(Context);
    const location = useLocation();
    const navigate = useNavigate();
    const [username, setUsername] = useState<string>('Kfk fkf');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [color, setColor] = useState<string>('gray.9');

    let backgroundStyle = {
        backdropFilter: 'blur(7.5px)',
        width: '100vw',
        height: '100vh',
    };

    const handleAuth = async () => {
        if (location.pathname === '/login') { 
            await UStore.login(email, password)
        } else {
            await UStore.registration(username, email, password)
        }
        if (UStore.isAuth) {
            navigate('/')
        }
    };

    if (UStore.isLoading) {
        return (
            <div>Загрузка...</div>
        );
    };

    return(
        <div>
        <Flex style={backgroundStyle} align="center" justify="center">
            <Container size='35rem' >
                <Card padding="2rem 1.5rem 2.5rem" radius="1.875rem">
                    <Flex gap="2rem" direction="column">
                        <Card padding="0 2.5rem">
                        <Flex gap="3rem" direction="column">
                            <Group position="center" spacing="0.5rem">
                                <Title size="h2">{location.pathname === '/login' ? 'Вход' : 'Регистрация'}</Title>
                            </Group>
                            <Stack justify="center">
                                <TextInput
                                    style={{width: '25rem'}}
                                    placeholder="aaa@yandex.ru"
                                    label="Email"
                                    size="md"
                                    withAsterisk
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    type="email"
                                    radius="0.5rem"
                                />
                                <PasswordInput
                                    style={{width: '25rem'}}
                                    placeholder="*******"
                                    label="Пароль"
                                    size="md"
                                    withAsterisk
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    radius="0.5rem"
                                />
                                <Space h="0.5rem"/>
                                <Button 
                                    color="orange.5" 
                                    radius="lg" 
                                    size="md"
                                    style={{
                                        width: '25rem',
                                        fontWeight: '600',
                                        fontSize: '16px',
                                        lineHeight: '18px',
                                        height: '57px',
                                    }}
                                    disabled={(email && password) ? false : true}
                                    onClick={handleAuth}
                                >
                                    {location.pathname === '/login' ? "Вход" : 'Регистрация'}
                                </Button>
                            </Stack>
                            <Flex justify="center" gap="0.25rem">
                                <Text size="p3" fw={500} c="gray.2">
                                    {location.pathname === '/login' ? "Нет аккаунта?" : 'Есть аккаунт?'}
                                </Text>
                                <NavLink to={location.pathname === '/login' ? "/registration" : '/login'}>
                                    <Text 
                                        onMouseEnter={() => setColor('orange.4')}
                                        onMouseLeave={() => setColor('gray.9')}
                                        size="p3" 
                                        fw={600} 
                                        c={color}
                                    >
                                        {location.pathname === '/login' ? "Регистрация" : 'Войти'}
                                    </Text>
                                </NavLink>
                            </Flex>
                        </Flex>
                        </Card>
                    </Flex>
            </Card>
            </Container>
        </Flex>
        </div>
    );
};

export default observer(AuthPage);